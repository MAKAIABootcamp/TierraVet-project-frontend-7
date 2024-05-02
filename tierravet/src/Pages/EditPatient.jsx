import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDog, 
    faCat, 
    faFloppyDisk,
    faPenToSquare
 } from "@fortawesome/free-solid-svg-icons";

const EditPatient = () => {
  return (
    <>
      <div className="bg-primary">
        <Navbar />

        <div className="mt-20 ml-20">
          <FontAwesomeIcon icon={faDog} className="text-secondary text-2xl" />
        </div>

        <div>
          <label className="block ml-16 mr-16 mt-1 relative">
            <input
              type="text"
              name="user1"
              className="mt-4 w-full px-20 py-2 block placeholder-tertiary bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="HC #: 10001 Tierra"
            />
            <span className="absolute inset-0 mt-2 mr-10 flex justify-end text-lg">
              01.01.2025
            </span>
          </label>

          <div className="flex justify-center items-center mt-10 mb-10">
            <div className="bg-tertiary rounded-full p-16">
              <FontAwesomeIcon icon={faDog} className="text-white text-8xl" />
            </div>
            <FontAwesomeIcon icon={faPenToSquare} className=" text-2xl mt-40 ml-40 absolute" />
          </div>

          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-1 w-full px-20 py-2 block placeholder-tertiary bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="Nombre del tutor:"
            />
            <span className="absolute inset-0 mt-2 ml-60 flex justify-center text-lg text-tertiary">
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
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-1 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="Edad:"
            />
            <span className="absolute inset-0 mt-2 ml-80 flex text-lg">
              Peso: ____ Kg
            </span>
            <span className="absolute inset-0 mt-2 justify-center flex  text-lg text-tertiary">
              Sexo:
            </span>
            <span className="absolute inset-0 mt-2 mr-60 justify-end flex text-lg">
                microchip:
            </span>
          </label>
        </div>

        <div className="flex justify-end mt-2 mr-10">
          <FontAwesomeIcon icon={faFloppyDisk} className=" text-3xl mr-12" />
        </div>
      </div>
    </>
  );
};

export default EditPatient;
