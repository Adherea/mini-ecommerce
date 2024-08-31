"use client";
import Image from "next/image";
import React from "react";
import wa from "../../public/icon/wa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const nowa = () => {
    window.location.href = "https://wa.me/6281273790314";
  };

  return (
    <section className=" max-w-7xl mx-auto py-14">
      <div className="flex items-center gap-11">
        <div className="kanan w-full text-center">
          <h1>Ingin komunikasi lebih lanjut? hubungi nomer di bawah</h1>
          <div className="max-w-fit mx-auto py-7">
            <Image src={wa} alt="wa" width={100} height={100} />
          </div>
          <button onClick={nowa} className="bg-[#44DC5F] text-white rounded-md py-2 px-3">
            Hubungi Sekarang! <FontAwesomeIcon icon={faPhone} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Form;
