"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { WHO_YOU_ARE } from "./WHO_YOU_ARE";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ThinkingDots from "@/components/ui/thinking-dots";

type Message = {
  role: "user" | "model";
  text: string;
  hideInChat?: boolean;
  isError?: boolean;
};

const Bot = () => {
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const t = useTranslations("Bot");

  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const generateBotResponse = async (updatedHistory: Message[]) => {
    setChatHistory((prev) => [
      ...prev.filter((msg) => msg.text !== "thinking..."),
      { role: "model", text: "thinking..." },
    ]);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedHistory.map(({ role, text }) => ({
            role,
            content: text,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to get response from server.");
      }

      const botText = data.response?.trim() || "No response received.";

      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "thinking..."),
        { role: "model", text: botText },
      ]);
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "thinking..."),
        { role: "model", text: errorMessage, isError: true },
      ]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    const newHistory: Message[] = [
      ...chatHistory,
      { role: "user", text: userMessage },
    ];
    setChatHistory(newHistory);

    generateBotResponse(newHistory);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  useEffect(() => {
    if (chatHistory.length === 0) {
      setChatHistory([
        {
          role: "model",
          text: WHO_YOU_ARE,
          hideInChat: true,
        },
      ]);
    }
  }, [chatHistory.length]);

  const resetChat = () => {
    setChatHistory([
      {
        role: "model",
        text: WHO_YOU_ARE,
        hideInChat: true,
      },
    ]);
  };

  return (
    <div
      className="w-full rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-cyan-900 transition-all duration-300 border border-gray-200 backdrop-blur-xl"
      style={{
        height: isOpen ? "600px" : "100px",
        background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Image
            width={40}
            height={40}
            src="/logo/dainy-mini.png"
            alt="Dainy"
            className="w-10 h-10 rounded-full shadow-sm"
          />
          <span className="font-semibold text-lg text-gray-800">Dainy</span>
        </div>
        <button
          onClick={toggleChat}
          className="text-gray-500 hover:scale-110 transition-transform"
        >
          {isOpen ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
        </button>
      </div>

      {/* Chat Content */}
      {isOpen && (
        <>
          <div
            ref={chatBodyRef}
            className="flex flex-col w-full h-full overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent space-y-3 px-4 py-2"
          >
            {chatHistory.map(
              (msg, index) =>
                !msg.hideInChat && (
                  <div
                    key={index}
                    className={`${
                      msg.role === "user"
                        ? "self-end bg-blue-100 text-gray-900"
                        : "self-start bg-white text-gray-800"
                    } rounded-2xl px-4 py-3 max-w-[75%] shadow-sm ${
                      msg.isError ? "text-red-500 bg-red-100" : ""
                    }`}
                  >
                    {msg.text === "thinking..." ? <ThinkingDots /> : msg.text}
                  </div>
                )
            )}
          </div>

          {/* Input Section */}
          <div className="relative px-4 pb-4 pt-2">
            <form
              className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-inner ring-1 ring-gray-200"
              onSubmit={handleFormSubmit}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder={`${t("message")}...`}
                className="bg-transparent flex-1 outline-none text-gray-800 placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="text-gray-700 hover:scale-110 transition-transform"
              >
                <ChevronUp size={20} />
              </button>
              <button
                onClick={resetChat}
                type="button"
                className="text-xs text-gray-400 hover:underline"
              >
                {t("reset")}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Bot;
