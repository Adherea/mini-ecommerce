import Image from "next/image";
import React from "react";
import logo from "../../public/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope, faFilePdf, faGlobe, faPhone, faProcedures, faSquarePersonConfined, faStoreSlash } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import satu from "../../public/1.png";
import dua from "../../public/2.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#437DBB] py-8 ">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-4 gap-7">
            <div>
              <div className="">
                <Image src={logo} width={300} height={300} alt="logo" />
                <h1>PT. Industri Furniture Indonesia</h1>
              </div>
              <div className="text-white py-5">
                <p>
                  <FontAwesomeIcon icon={faGlobe} /> Jl. Kampung Baru No. 89 RT. 02 RW. 02 Singabangsa, Kec. Tenjo, Kab. Bogor, Jawa Barat 16370.
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> +62811-1678-733
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> marketing@sapporo.co.id
                </p>
              </div>
            </div>
            <div className="px-10">
              <div className="">
                <h1>Usefull Links</h1>
              </div>
              <div className="text-white py-5 flex flex-col">
                <a>
                  <FontAwesomeIcon icon={faBuilding} /> Tentang Kami
                </a>
                <a>
                  <FontAwesomeIcon icon={faStoreSlash} /> Gudang Kami
                </a>
                <a>
                  <FontAwesomeIcon icon={faTruck} /> Armada Kami
                </a>
                <a>
                  <FontAwesomeIcon icon={faFilePdf} /> Lihat Produk
                </a>
                <a>
                  <FontAwesomeIcon icon={faProcedures} /> Download Katalog
                </a>
                <a>
                  <FontAwesomeIcon icon={faSquarePersonConfined} /> Artikel produk
                </a>
              </div>
            </div>
            <div>
              <div className="">
                <h1>Usefull Links</h1>
              </div>
              <div className="text-white py-5 flex flex-col">
                <a>
                  <FontAwesomeIcon icon={faBuilding} /> Dining Set
                </a>
                <a>
                  <FontAwesomeIcon icon={faStoreSlash} /> Meja Makan
                </a>
                <a>
                  <FontAwesomeIcon icon={faTruck} /> Kursi Susun
                </a>
                <a>
                  <FontAwesomeIcon icon={faFilePdf} /> Kursi Kantor
                </a>
                <a>
                  <FontAwesomeIcon icon={faProcedures} /> Locker Besi
                </a>
              </div>
            </div>
            <div>
              <div className="">
                <h1>Tetap Terhubung</h1>
                <div className="flex items-center gap-3 py-3">
                  <FontAwesomeIcon icon={faPhone} className="bg-green-500 text-white p-2 rounded-full" />
                  <FontAwesomeIcon icon={faFacebook} className="bg-blue-900 text-white p-2 rounded-full" />
                  <FontAwesomeIcon icon={faInstagram} className="bg-orange-400 text-white p-2 rounded-full" />
                  <FontAwesomeIcon icon={faYoutube} className="bg-red-600 text-white p-2 rounded-full" />
                </div>
              </div>
              <div className="text-white py-5 flex flex-col gap-1">
                <h1>Safe Checkout</h1>
                <Image src={satu} width={200} height={200} alt="satu" />
                <Image src={dua} width={200} height={200} alt="dua" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white py-10">
        <h1 className="text-center mt-11">
          Copyright © 2024 PT. Industri Furniture Indonesia | Website developed by <span className="text-[#6AB6D6] ">Weborbit</span> .
        </h1>
      </div>
    </>
  );
}

export default Footer;
