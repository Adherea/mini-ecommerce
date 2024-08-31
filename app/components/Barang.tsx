"use client";
import Image from "next/image";
import React from "react";

// Definisikan tipe data untuk properti yang diterima oleh komponen Barang
interface BarangProps {
  id: string;
  gambar: string;
  kategori: string;
  nama: string;
  harga: number;
}

export default function Barang({ id, gambar, kategori, nama, harga }: BarangProps) {
  return (
    <section className="rounded-md shadow-lg w-fit">
      <div className="relative overflow-hidden" style={{ width: "250px", height: "250px" }}>
        <Image
          className={`transition-opacity duration-300 ease-in-out rounded-tl-xl rounded-tr-xl`}
          style={{
            transition: "opacity 0.3s ease-in-out",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          src={gambar}
          width={950}
          height={250}
          alt="produk"
        />
      </div>
      <div className="px-5 py-3 rounded-bl-xl rounded-br-xl">
        <h1 className="pt-5">{nama}</h1>
        <p className="py-2">Kategori: {kategori}</p>
        <h5 className="font-bold">Rp {harga}</h5>
      </div>
    </section>
  );
}
