"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Bot from "./bot/Bot";
import Image from "next/image";

const Chat = () => {
  const t = useTranslations("Main");

  return (
    <div className="min-h-screen">
      <section className="flex flex-col min-h-screen">
        <div className="flex flex-col lg:flex-row justify-between mb-6 lg:mb-10 mt-10 sm:mt-16 mx-4 lg:mx-8 gap-6">
          <div className="w-full text-black font-semibold text-3xl sm:text-4xl font-inter lg:ml-20 leading-snug">
            <p>
              {t.rich("heading", {
                name: "Dainy",
              })}
            </p>

            <p className="text-blue-600 text-xl font-light mt-4">
              {t("subheading")}
            </p>
          </div>
        </div>

        <div className="flex relative flex-col items-center md:flex-row md:items-start md:justify-center z-10">
          <div className="z-10 w-full max-w-[420px] px-4">
            <Bot />
          </div>
          <div className="absolute top-[-110px] right-0 w-1/2 hidden lg:block z-0 overflow-hidden pointer-events-none">
            <Image
              width={500}
              height={500}
              src="/vector.svg"
              alt="Chat Background"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute left-0 w-1/2 hidden lg:block z-0 overflow-hidden pointer-events-none">
            <Image
              width={500}
              height={500}
              src="/vector.svg"
              alt="Chat Background"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mt-12 w-full px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-[830px] mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-[24px] sm:text-[28px] md:text-[32px] font-inter px-6 sm:px-10 py-6 rounded-[15px] relative z-10 text-center md:text-left gap-4 md:gap-0">
            <div>
              {t("questionBox.title")} <br />
              <span className="inline-block bg-white text-blue-600 px-2.5 font-bold rounded">
                {t("questionBox.highlight")}
              </span>
            </div>
            <div className="relative mt-4 md:mt-0">
              {t("questionBox.write")}
              <br />
              {t("questionBox.or")}
              <span className="absolute top-10 inline-block bg-white text-indigo-700 font-bold px-2 rotate-[10deg] rounded">
                {t("questionBox.call")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
