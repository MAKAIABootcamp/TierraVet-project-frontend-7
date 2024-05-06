import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faUserDoctor,
  faUserNurse,
  faSearch,
  faHourglassStart
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Users = () => {
  return (
    <div className="bg-primary">
      
      <Navbar />
      
      <label className="flex ml-52 mr-52 justify-between relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-tertiary mt-16 ml-16" />
        </div>
        <input
          type="text"
          name="search"
          className="mt-16 text-center px-10 py-2 bg-white border shadow-lg border-secondary placeholder-tertiary focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
          placeholder="Buscar Usuario"
        />
        <div className="absolute inset-y-0 right-80 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faUserNurse} className="text-white mt-16 text-xl " />
        </div>
        <input
          type="text"
          name="new-user"
          className="mt-16 text-center pl-20 pr-10 py-2 bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
          placeholder="AGREGAR NUEVO USUARIO"
        />
      </label>
      
      <div className="flex justify-end mt-20 mr-10">
        <FontAwesomeIcon
          icon={faStethoscope}
          className="text-secondary text-4xl"
        />
        <span className="text-2xl ml-2 mr-10">MV</span>
        <FontAwesomeIcon
          icon={faUserDoctor}
          className="text-secondary text-4xl"
        />
        <span className="text-2xl ml-2 mr-10">Esp.</span>
        <FontAwesomeIcon
          icon={faUserNurse}
          className="text-secondary text-4xl"
        />
        <span className="text-2xl ml-2 mr-8">AV</span>
      </div>
      
      <div>
        <label className="block ml-16 mr-16 relative">
            <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-tertiary text-lg" />
            </div>
            <input
            type="text"
            name="user1"
            className="mt-4 w-full px-20 py-2 bg-white border border-secondary placeholder-black focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="Catalina María Yepes"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
                <FontAwesomeIcon icon={faHourglassStart} className="text-tertiary text-lg" />
            </div>
        </label>
        <label className="block ml-16 mr-16 relative">
            <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-tertiary text-lg" />
            </div>
            <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 bg-white border border-secondary placeholder-black focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="Daniela Artunduaga"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
                <FontAwesomeIcon icon={faHourglassStart} className="text-tertiary text-lg" />
            </div>
        </label>
        <label className="block ml-16 mr-16 relative">
            <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-tertiary text-lg" />
            </div>
            <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 bg-white border border-secondary placeholder-black focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="Natacha Herrera"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
                <FontAwesomeIcon icon={faHourglassStart} className="text-tertiary text-lg" />
            </div>
        </label>
        <label className="block ml-16 mr-16 relative">
            <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-tertiary text-lg" />
            </div>
            <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 bg-white border border-secondary placeholder-black focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="Mallerly Usme"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
                <FontAwesomeIcon icon={faHourglassStart} className="text-tertiary text-lg" />
            </div>
        </label>
        <label className="block ml-16 mr-16 relative">
            <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-tertiary text-lg" />
            </div>
            <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 bg-white border border-secondary placeholder-black focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="Carolina Martinez"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
                <FontAwesomeIcon icon={faHourglassStart} className="text-tertiary text-lg" />
            </div>
        </label>
        <label className="block ml-16 mr-16 relative">
            <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-tertiary text-lg" />
            </div>
            <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 bg-white border border-secondary placeholder-black focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="Davidson Julián Zapata"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
                <FontAwesomeIcon icon={faHourglassStart} className="text-tertiary text-lg" />
            </div>
        </label>
        <label className="block ml-16 mr-16 relative">
            <div className="absolute  inset-0 pl-10 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-tertiary text-lg" />
            </div>
            <input
            type="text"
            name="user1"
            className="mt-2 w-full px-20 py-2 bg-white border border-secondary placeholder-black focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="Henry Zapata"
            />
            <div className="absolute inset-0 mt-4 mr-8 flex justify-end pointer-events-none">
                <FontAwesomeIcon icon={faHourglassStart} className="text-tertiary text-lg" />
            </div>
        </label>
      </div>

      <Footer />

    </div>
  );
};

export default Users;

