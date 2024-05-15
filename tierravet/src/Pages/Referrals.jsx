import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faFile,
  faFloppyDisk,
  faFileAlt,
  faCommentAlt,
  faFolder,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

const Referrals = () => {
  return (
    <>
      <div className="bg-primary ">
        <div className="flex justify-center space-x-24">
        <label className="flex justify-center relative">
          <div className="absolute mr-60 pointer-events-none">
            <FontAwesomeIcon
              icon={faFile}
              className="text-white mt-16 text-2xl pl-12 py-6"
            />
          </div>
          <input
            type="text"
            name="new-control"
            className=" mt-20 mb-10 pl-14 py-2 text-center bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="NUEVA REMISIÓN"
          />
        </label>
        <label className="flex justify-center relative">
          <div className="absolute mr-60 pointer-events-none">
            <FontAwesomeIcon
              icon={faFolder}
              className="text-white mt-16 text-2xl pl-12 py-6"
            />
          </div>
          <input
            type="text"
            name="new-control"
            className=" mt-20 mb-10 pl-14 py-2 text-center bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="ADJUNTAR HISTORIA"
          />
        </label>
        </div>
        <div className="absolute right-10 mb-10">
            <FontAwesomeIcon icon={faFileAlt} className="text-black text-2xl mr-5" />
            <FontAwesomeIcon icon={faCommentAlt} className="text-black text-2xl mr-8" />
          </div>
        <div>
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-12 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="HC #: 00000"
            />
            <span className="absolute inset-0 mt-2 mr-10 flex justify-end text-lg">
              00.00.0000
            </span>
          </label>
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-4 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="Nombre del paciente:"
            />
            <div className="absolute inset-0 mt-2 mr-24 flex justify-end ">
              <FontAwesomeIcon
                icon={faDog}
                className="text-secondary text-2xl"
              />
            </div>
            <div className="absolute inset-0 mt-2 mr-10 flex justify-end ">
              <FontAwesomeIcon
                icon={faCat}
                className="text-secondary text-2xl"
              />
            </div>
          </label>
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-1 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="Nombre del tutor:"
            />
            <span className="absolute inset-0 mt-2 ml-60 flex justify-center text-lg">
              Identificación:
            </span>
          </label>
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-1 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="Número telefónico #1:"
            />
            <span className="absolute inset-0 mt-2 mr-60 justify-center flex text-lg">
              #2:
            </span>
            <span className="absolute inset-0 mt-2 ml-80 flex justify-center text-lg">
              Email:
            </span>
          </label>
        </div>

        <div className="block mt-4 ml-16 mr-16 relative  bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
          <p className="text-lg flex justify-center mt-6 ">REMISIÓN MÉDICA</p>
          <p className="text-lg ml-8 pt-16 mb-32">Motivo de la remisión:</p>
        </div>
        <div className="flex justify-end mt-2 mr-10">
          <FontAwesomeIcon icon={faFloppyDisk} className=" text-3xl mr-12" />
          <FontAwesomeIcon icon={faPenToSquare} className=" text-3xl mr-12" />
        </div>
      </div>
    </>
  );
};

export default Referrals;
