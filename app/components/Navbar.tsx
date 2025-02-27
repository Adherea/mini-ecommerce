"use client";

import React, { useState, useEffect, useRef } from "react";
import logonya from "../../public/icon/icon.png";
import hamburger from "../../public/icon/text.png";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-b-[#EAEAEA]">
      <nav className="py-3 px-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src={logonya} width={150} alt="logo" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-600" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <span className="sr-only">Open Menu</span>
          <Image src={hamburger} width={150} alt="burger" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center items-center gap-8">
          <ul className="flex gap-8">
            <li className="relative group hover:cursor-pointer">Home</li>
            <li className="relative group hover:cursor-pointer">Tentang Kami</li>
            <li className="relative group hover:cursor-pointer">Produk</li>
            <li className="relative group hover:cursor-pointer">% Promo</li>
            <li className="relative group hover:cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={menuRef} className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li className="hover:cursor-pointer">Home</li>
              <li className="hover:cursor-pointer">Tentang Kami</li>
              <li className="hover:cursor-pointer">Produk</li>
              <li className="hover:cursor-pointer">% Promo</li>
              <li className="hover:cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </nav>

      <style jsx>{`
        .group:hover::after {
          transform: scaleX(1);
        }
        li::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          width: 100%;
          background-color: #6ec1e4;
          transition: transform 0.3s ease-in-out;
          transform: scaleX(0);
          transform-origin: center;
        }
      `}</style>
    </header>
  );
}
