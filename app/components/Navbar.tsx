"use client";

import React from "react";
import logonya from "../../public/icon/icon.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b-[#EAEAEA] border-b">
      <nav className="py-3 px-2 max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Image src={logonya} width={250} alt="logo" />
        </div>
        <div className="flex justify-center items-center gap-8">
          <ul>
            <li className="relative group hover:cursor-pointer">Home</li>
          </ul>
          <ul>
            <li className="relative group hover:cursor-pointer">Tentang Kami</li>
          </ul>
          <ul>
            <li className="relative group hover:cursor-pointer">Produk</li>
          </ul>
          <ul>
            <li className="relative group hover:cursor-pointer">% Promo</li>
          </ul>
          <ul>
            <li className="relative group hover:cursor-pointer">Contact</li>
          </ul>
        </div>
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
