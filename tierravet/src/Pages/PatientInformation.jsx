import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faDog,
  faHourglassStart,
  faPenToSquare,
  faFaceFrown,
  faPrint,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const PatientInformation = () => {
  return (
    <>
      <div className="bg-primary">
        <Navbar />

        <div className="block mt-20 ml-20 ">
          <FontAwesomeIcon
            icon={faDog}
            className="text-secondary absolute text-2xl"
          />
          <span className="flex justify-end mr-20">
            <FontAwesomeIcon
              icon={faFaceFrown}
              className="text-gray-500 mr-4 text-2xl"
            />
            <FontAwesomeIcon
              icon={faPrint}
              className="text-gray-500  text-2xl"
            />
          </span>
        </div>

        <div>
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-4 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
              placeholder="HC #: 10001 Tierra"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
              <FontAwesomeIcon
                icon={faHourglassStart}
                className="text-tertiary text-lg"
              />
            </div>
            <span className="absolute inset-0 mt-2 mr-20 flex justify-end text-lg">
              01.01.2025
            </span>
          </label>

          <label className="block ml-16 mr-16 mt-4 relative">
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
          <span className="absolute inset-0 mt-2 justify-center flex  text-lg">
            Sexo:
          </span>
          <span className="absolute inset-0 mt-2 mr-20 justify-end flex text-lg">
            Esterilizado:
            <input type="checkbox" className="ml-4 mr-2 w-6 h-6" /> SI
            <input type="checkbox" className="ml-4 mr-2 w-6 h-6" /> NO
          </span>
        </label>

        <div className="block mt-4 ml-16 mr-16 relative  bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
          <p className="text-center text-lg mt-2">HISTORIAL MÉDICO</p>

          <span className="flex justify-between mt-4 ml-8">
            <p className="ml-10">Consulta</p>
            <p className=" mr-10">01.01.2024
            <FontAwesomeIcon
              icon={faHourglassStart}
              className=" text-tertiary ml-10"
            />
            </p>
          </span>
          <span className="flex justify-between mt-4 ml-8">
            <p className="ml-10">Control/tratamiento</p>
            <p className=" mr-10">01.01.2022
            <FontAwesomeIcon
              icon={faCheck}
              className=" text-tertiary text-2xl ml-10"
            />
            </p>
          </span>
          <span className="flex justify-between mt-4 ml-8">
            <p className="ml-10">Vacunación/Desparasitación</p>
            <p className="  mr-10 mb-20">01.01.2022
            <FontAwesomeIcon
              icon={faCheck}
              className=" text-tertiary text-2xl ml-10"
            />
            </p>
          </span>
        </div>

        <div className="flex justify-end mt-2 mr-10">
          <FontAwesomeIcon icon={faFloppyDisk} className=" text-3xl mr-12" />
          <FontAwesomeIcon icon={faPenToSquare} className=" text-3xl mr-12" />
        </div>
      </div>
    </>
  );
};

export default PatientInformation;
