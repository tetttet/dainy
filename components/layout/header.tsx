"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@/types/User";
import { MenuIcon } from "lucide-react";
import SignOutDropdown from "../ui/sing-out-dropdown";
import LanguageButton from "../ui/language-button";
import { useTranslations } from "next-intl";

type HeaderProps = {
  user: User;
};

const Header = ({ user }: HeaderProps) => {
  const t = useTranslations("Header");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t("navLinks.Home"), href: "/", active: true },
    { label: t("navLinks.About"), href: "/about" },
    { label: t("navLinks.News"), href: "/news" },
    { label: t("navLinks.Documentation"), href: "/documentation" },
    { label: t("navLinks.Contact"), href: "/contact" },
  ];

  const dropdownLinks = [
    { label: t("dropdownLinks.Dashboard"), href: "/dashboard" },
    { label: t("dropdownLinks.Settings"), href: "/settings" },
  ];

  const linkClass =
    "block py-2 px-3 rounded-sm md:p-0 md:hover:bg-transparent md:hover:text-blue-700 text-gray-900 hover:bg-gray-100";

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={150}
            height={50}
            src="/logo/short-logo-removebg.png"
            alt="Logo"
          />
        </Link>

        {/* Right controls */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* User avatar */}
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              width={42}
              height={42}
              className="rounded-full"
              src={user.image || "/default-avatar.png"}
              alt="User"
            />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-4 top-16 z-50 w-48 bg-white rounded-lg shadow-md">
              <div className="px-4 py-3">
                <p className="text-sm text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
              </div>
              <ul className="py-2 text-sm text-gray-700">
                {dropdownLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <LanguageButton />
                <SignOutDropdown />
              </ul>
            </div>
          )}

          {/* Burger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navLinks.map(({ label, href, active }) => (
              <li key={label}>
                <a
                  href={href}
                  className={
                    active
                      ? `text-white bg-blue-700 md:text-blue-700 md:bg-transparent ${linkClass}`
                      : `${linkClass}`
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
