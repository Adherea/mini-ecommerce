"use client";
import Image from "next/image";
import React from "react";

interface BarangProps {
  id: string;
  gambar: string;
  kategori: string;
  nama: string;
  harga: number;
}

export default function Barang({ id, gambar, kategori, nama, harga }: BarangProps) {
  return (
    <section className="rounded-md shadow-lg w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-tl-xl rounded-tr-xl w-full aspect-square">
        <Image className="transition-opacity duration-300 ease-in-out object-cover" src={gambar} alt="produk" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        <div className="absolute bottom-0 left-0 bg-black/50 text-white px-3 py-1 rounded-tr-lg">Rp {harga}</div>
      </div>
      <div className="px-5 py-3 rounded-bl-xl rounded-br-xl">
        <h1 className="pt-5 text-sm md:text-base">{nama}</h1>
        <p className="py-2 text-xs md:text-base font-bold">Kategori: {kategori}</p>
      </div>
    </section>
  );
}
