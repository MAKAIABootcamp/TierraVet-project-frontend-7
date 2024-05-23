import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faUserDoctor,
  faHourglassStart,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const EditUser = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="mt-20 ml-20">
          <FontAwesomeIcon icon={faUserDoctor} className="text-secondary text-2xl" />
          <span className="text-xl ml-2">Esp.</span>
        </div>

        <div>
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-4 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="Catalina María Yepes"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
                <FontAwesomeIcon icon={faHourglassStart} className="text-tertiary text-lg" />
            </div>
            <span className="absolute inset-0 mt-2 mr-20 flex justify-end text-lg">
              01.0.2025
            </span>
          </label>
  
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-1 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="Médica Veterinaria Especialista en Felinos"
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
          <p className="text-lg flex justify-center mt-2 ">PENDIENTES</p>
          <span className="flex mt-6 ml-8">
            <p className="ml-10">HC # 10001 </p>
            <p className="ml-10">Tierra </p>
            <p className="text-tertiary ml-2 mr-80">/ Isabel Labrador</p>
            <p className="ml-96 text-tertiary">Remisión</p>
          </span>
          <span className="flex mt-2 ml-8">
            <p className="ml-10">HC # 10023 </p>
            <p className="ml-10">La Negra </p>
            <p className="text-tertiary ml-2 mr-80">/ Natacha Herrera</p>
            <p className="ml-60 text-tertiary mb-10">Vacunación/Desparasitación</p>
          </span>
        </div>

        <div className=" mt-4 ml-16 mr-16 w-1/3 relative  bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
            <p className="mt-40 ml-10">Firma Digital: ___________________________</p>
            <p className="mt-2 ml-20">Catalina Yepes MV Esp. en Felinos</p>
            <p className="mt-1 mb-2 flex justify-center">TP: 123456</p>
        </div>

        <div className="flex justify-end mt-2 mr-10">
          <FontAwesomeIcon icon={faFloppyDisk} className=" text-3xl mr-12" />
          <FontAwesomeIcon icon={faPenToSquare} className=" text-3xl mr-12" />
        </div>
      </div>
    </>
  );
};

export default EditUser;
