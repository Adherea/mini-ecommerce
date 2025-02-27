import { faMedal, faScrewdriver, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Service() {
  return (
    <section className="bg-[#6EC1E4]  py-5 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 p-7 gap-8">
        <div className="flex items-center gap-4 ">
          <div className="">
            <FontAwesomeIcon icon={faTruck} className="bg-white rounded-full p-5 text-3xl text-[#FFBF3B]" />
          </div>
          <div className="">
            <p>Free Ongkir daerah Jawa</p>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <div className="">
            <FontAwesomeIcon icon={faScrewdriver} className="bg-white rounded-full p-5 text-3xl text-[#FFBF3B]" />
          </div>
          <div className="">
            <p>
              Free Pasang <br />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <div className="">
            <FontAwesomeIcon icon={faUser} className="bg-white rounded-full p-5 text-3xl text-[#FFBF3B]" />
          </div>
          <div className="">
            <p>Dokumen Pelanggan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
