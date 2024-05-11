import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHourglassStart,
  faPaw,
  faDog,
  faCat,
  faFaceFrown,
  faPrint,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Patients = () => {
  return (
    <div className="bg-primary">


      <label className="flex ml-52 mr-52 justify-between relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-tertiary mt-16 ml-10"
          />
        </div>
        <input
          type="text"
          name="search"
          className="mt-16 text-center px-10 py-2 bg-white border shadow-lg border-secondary placeholder-tertiary focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
          placeholder="Buscar por paciente"
        />
        <div className="absolute inset-y-0 right-60 pr-4 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-tertiary mt-16 " />
        </div>
        <input
          type="text"
          name="search"
          className="mt-16 text-center px-8 py-2 bg-white border shadow-lg border-secondary placeholder-tertiary focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
          placeholder="Buscar por tutor"
        />
      </label>

      <label className="flex justify-center">
        <div className="absolute mr-60 pointer-events-none">
          <FontAwesomeIcon
            icon={faPaw}
            className="text-white mt-16 text-2xl py-6 pr-8"
          />
        </div>
        <input
          type="text"
          name="new-patient"
          className=" mt-20  pl-20 pr-10 py-2 bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
          placeholder="AGREGAR NUEVO PACIENTE"
        />
      </label>

      <div className="flex justify-end mt-20 mr-10">
        <FontAwesomeIcon
          icon={faDog}
          className="text-secondary text-4xl mr-10"
        />
        <FontAwesomeIcon
          icon={faCat}
          className="text-secondary text-4xl mr-12"
        />
      </div>

      <div>
        <label className="block ml-16 mr-16 relative ">
          <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-tertiary text-lg"
            />
          </div>
          <input
            type="text"
            name="user1"
            className="mt-4 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
            placeholder="Tierra / Isabel Labrador"
          />
          <div className="absolute inset-0 mt-4 mr-36 flex justify-end ">
            <FontAwesomeIcon
              icon={faFaceFrown}
              className="text-gray-500 text-lg"
            />
          </div>
          <div className="absolute inset-0 mt-4 mr-28 flex justify-end ">
            <FontAwesomeIcon icon={faPrint} className="text-gray-500 text-lg" />
          </div>
          <div className="absolute inset-0 mt-4 mr-8 flex justify-end ">
            <FontAwesomeIcon
              icon={faHourglassStart}
              className="text-tertiary text-lg"
            />
          </div>
        </label>
        <label className="block ml-16 mr-16 relative ">
          <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-tertiary text-lg"
            />
          </div>
          <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
            placeholder="Smoke / Isabel Labrador"
          />
          <div className="absolute inset-0 mt-4 mr-36 flex justify-end ">
            <FontAwesomeIcon
              icon={faFaceFrown}
              className="text-gray-500 text-lg"
            />
          </div>
          <div className="absolute inset-0 mt-4 mr-28 flex justify-end ">
            <FontAwesomeIcon icon={faPrint} className="text-gray-500 text-lg" />
          </div>
          <div className="absolute inset-0 mt-4 mr-8 flex justify-end ">
            <FontAwesomeIcon icon={faCheck} className="text-tertiary text-xl" />
          </div>
        </label>
        <label className="block ml-16 mr-16 relative ">
          <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-tertiary text-lg"
            />
          </div>
          <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
            placeholder="Hunter / Isabel Labrador"
          />
          <div className="absolute inset-0 mt-4 mr-36 flex justify-end ">
            <FontAwesomeIcon
              icon={faFaceFrown}
              className="text-gray-500 text-lg"
            />
          </div>
          <div className="absolute inset-0 mt-4 mr-28 flex justify-end ">
            <FontAwesomeIcon icon={faPrint} className="text-gray-500 text-lg" />
          </div>
          <div className="absolute inset-0 mt-4 mr-8 flex justify-end ">
            <FontAwesomeIcon
              icon={faHourglassStart}
              className="text-tertiary text-lg"
            />
          </div>
        </label>
        <label className="block ml-16 mr-16 relative ">
          <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-tertiary text-lg"
            />
          </div>
          <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
            placeholder="La Negra / Natacha Herrera"
          />
          <div className="absolute inset-0 mt-4 mr-36 flex justify-end ">
            <FontAwesomeIcon
              icon={faFaceFrown}
              className="text-gray-500 text-lg"
            />
          </div>
          <div className="absolute inset-0 mt-4 mr-28 flex justify-end ">
            <FontAwesomeIcon icon={faPrint} className="text-gray-500 text-lg" />
          </div>
          <div className="absolute inset-0 mt-4 mr-8 flex justify-end ">
            <FontAwesomeIcon
              icon={faHourglassStart}
              className="text-tertiary text-lg"
            />
          </div>
        </label>
        <label className="block ml-16 mr-16 relative ">
          <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-tertiary text-lg"
            />
          </div>
          <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
            placeholder="Juana / Carolina Martinez"
          />
          <div className="absolute inset-0 mt-4 mr-36 flex justify-end ">
            <FontAwesomeIcon
              icon={faFaceFrown}
              className="text-gray-500 text-lg"
            />
          </div>
          <div className="absolute inset-0 mt-4 mr-28 flex justify-end ">
            <FontAwesomeIcon icon={faPrint} className="text-gray-500 text-lg" />
          </div>
          <div className="absolute inset-0 mt-4 mr-8 flex justify-end ">
            <FontAwesomeIcon icon={faCheck} className="text-tertiary text-xl" />
          </div>
        </label>
        <label className="block ml-16 mr-16 relative ">
          <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-tertiary text-lg"
            />
          </div>
          <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
            placeholder="Oslo / Andrés Felipe Peláez"
          />
          <div className="absolute inset-0 mt-4 mr-36 flex justify-end ">
            <FontAwesomeIcon
              icon={faFaceFrown}
              className="text-gray-500 text-lg"
            />
          </div>
          <div className="absolute inset-0 mt-4 mr-28 flex justify-end ">
            <FontAwesomeIcon icon={faPrint} className="text-gray-500 text-lg" />
          </div>
          <div className="absolute inset-0 mt-4 mr-8 flex justify-end ">
            <FontAwesomeIcon
              icon={faHourglassStart}
              className="text-tertiary text-lg"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Patients;
