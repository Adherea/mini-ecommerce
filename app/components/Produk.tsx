"use client";

import { useState, useEffect } from "react";
import data from "../Data";
import Barang from "./Barang";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

const items_page_limit = 20;

export default function Produk() {
  const [page, setPage] = useState(1);
  const [kategoriAktif, setKategoriAktif] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const totalPages = Math.ceil(data.length / items_page_limit);
  const [halaman, setHalaman] = useState(false);

  useEffect(() => {
    const dataToSort = sortedData();
    setCurrentData(dataToSort.slice((page - 1) * items_page_limit, page * items_page_limit));
  }, [page, kategoriAktif, sortOrder, searchQuery]);

  const halamanSetelahnya = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const halamanSebelumnya = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const sortedData = () => {
    let dataToSort = kategoriAktif ? data.filter((item) => item.kategori === kategoriAktif) : data;

    if (searchQuery) {
      dataToSort = dataToSort.filter((item) => item.nama.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (sortOrder === "asc") {
      dataToSort.sort((a, b) => a.harga - b.harga);
    } else if (sortOrder === "desc") {
      dataToSort.sort((a, b) => b.harga - a.harga);
    }

    return dataToSort;
  };

  const filterType = (kategori) => {
    setKategoriAktif(kategori);
    setPage(1);
    setHalaman(true);
  };

  const halamandua = () => {
    setPage(2);
    window.location.href = "#awd";
  };

  const formatHarganya = (harga) => {
    if (typeof harga === "number") {
      return harga.toLocaleString("id-ID");
    }
    return harga;
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setKategoriAktif(null);
              setPage(1);
              setHalaman(false);
            }}
            className="bg-[#0451A5] text-white font-bold rounded-md py-2 px-4 hover:bg-gray-800"
          >
            <FontAwesomeIcon icon={faBars} /> Semua Produk
          </button>
          <div className="flex items-center gap-2 py-6">
            <button className="border rounded-full border-[#6EC1E4] px-4 hover:bg-[#6EC1E4] hover:text-white duration-300" onClick={() => filterType("ranjang")}>
              Ranjang
            </button>
            <button className="border rounded-full border-[#6EC1E4] px-4 hover:bg-[#6EC1E4] hover:text-white duration-300" onClick={() => filterType("lemari")}>
              Lemari
            </button>
            <button className="border rounded-full border-[#6EC1E4] px-4 hover:bg-[#6EC1E4] hover:text-white duration-300" onClick={() => filterType("dapur")}>
              Dapur
            </button>

            <button className="border rounded-full border-[#6EC1E4] px-4 hover:bg-[#6EC1E4] hover:text-white duration-300" onClick={() => filterType("tamu")}>
              Tamu
            </button>
          </div>
        </div>
        <div className="" id="awd">
          <select name="" id="" onChange={handleSortChange}>
            <option value="">urutkan menu yang terbaru</option>
            <option value="">urutkan berdasarkan tren</option>
            <option value="">urutkan berdasarkan rata rata rating</option>
            <option value="asc">urutkan dari termurah</option>
            <option value="desc">urutkan dari termahal</option>
          </select>
        </div>
      </div>
      <div className="py-16">
        <div className="grid grid-cols-5 gap-7">
          {currentData.map((x) => (
            <Barang key={x.id} id={x.id} gambar={x.gambar} kategori={x.kategori} nama={x.nama} harga={formatHarganya(x.harga)} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-5 pt-20">
          <button className={`${page > 1 ? "text-black" : "text-gray-400"}`} onClick={halamanSebelumnya} disabled={page === 1}>
            ←
          </button>

          <button onClick={() => setPage(1)}>1</button>
          <button className={`${halaman ? "hidden" : "static"}`} onClick={halamandua}>
            2
          </button>
          <button className={`${page < totalPages ? "text-black" : "text-gray-400"} ${halaman ? "hidden" : "static"}`} onClick={halamanSetelahnya} disabled={page === totalPages}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}
