import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

export default function Sosmed() {
  return (
    <section className="text-white bg-[#6EC1E4] py-2 px-3">
      <div className="max-w-7xl mx-auto  flex items-center justify-end">
        <div className="flex items-center gap-4">
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} className="hover:cursor-pointer hover:text-gray-200" />
            </li>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="hover:cursor-pointer hover:text-gray-200" />
            </li>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} className="hover:cursor-pointer hover:text-gray-200" />
            </li>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebook} className="hover:cursor-pointer hover:text-gray-200" />
            </li>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="hover:cursor-pointer hover:text-gray-200" />
            </li>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faYoutube} className="hover:cursor-pointer hover:text-gray-200" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
