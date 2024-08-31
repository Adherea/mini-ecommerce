"use client";

import { faCartShopping, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Search({ searchQuery, handleSearchChange }) {
  return (
    <section className="max-w-7xl mx-auto flex justify-between items-center py-3  gap-5">
      <div className="w-full flex justify-start items-center">
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Cari produk.." className="border rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md py-2 px-4 w-10/12" />
      </div>
      <div className="flex items-center justify-between gap-3 w-fit">
        <a href="" className="bg-red-600 text-white py-1 px-2 rounded-md">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </section>
  );
}

export default Search;
