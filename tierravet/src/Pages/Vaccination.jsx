import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faSyringe,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const Vaccination = () => {

    return (
        <>
        <div className="bg-primary">
        <label className="flex justify-center">
          <div className="absolute mr-60 pointer-events-none">
            <FontAwesomeIcon
              icon={faSyringe}
              className="text-white text-left pl-4 mr-40 mt-16 text-2xl py-6"
            />
          </div>
          <input
            type="text"
            name="new-vaccine"
            className=" mt-20 w-1/3 py-2 text-center bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="NUEVA VACUNA/DESPARASITACIÓN"
          />
        </label>

        <nav className="flex justify-center p-4 font-sans text-2xl text-secondary divide-x-2 mt-10">
          <NavLink
          to="/clinic-history"
          className="font-medium hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          General
        </NavLink>
        <NavLink
          to="/procedure"
          className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Control / procedimiento
        </NavLink>
        <NavLink
          to="/vaccination"
          className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Vacunación y desparasitación
        </NavLink>
        </nav>

        <div>
          <label className="block ml-16 mr-16 relative">
            <input
              type="text"
              name="user1"
              className="mt-4 w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 "
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
          <p className="text-lg flex justify-center mt-2 ">EXÁMEN FÍSICO</p>
          <span className="flex justify-center mt-6 ml-8">
            <p className="mr-20">T: ____ °C</p>
            <p className="mr-20">FC: ____ LPM</p>
            <p className="mr-20">FR: ____ RPM</p>
            <p className="ml-20">SPO2: ____ %</p>
            <p className="ml-20">TLLC: ____ SEG</p>
          </span>
          <span className="flex justify-center mt-4 ml-8">
            <p className="mr-20">GLUCOMETRÍA: ____ MG/DL</p>
            <p className="mr-20">PA: ____/____ MMHG</p>
            <p className="mr-20">MUCOSAS: __ __ __</p>
            <p>CC: ____/____</p>
          </span>
          <p className="text-lg ml-8 mt-4 mb-40">Observaciones:</p>
        </div>

        <div className="block mt-4 ml-16 mr-16 relative  bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
          <p className="text-lg flex justify-center mt-2 ">
            VACUNACIÓN
          </p>
          <span className="flex mt-6 ml-8">
            <p className="mr-80">Vacuna administrada:</p>
            <p className="mr-80">LOTE:</p>
            <p className="mr-20">Laboratorio:</p>
          </span>
          <p className="text-lg ml-8 mt-6 mb-40">Observaciones:</p>
          <span className="flex justify-between mr-20 mt-6 ml-8 mb-10">
            <p>PRÓXIMA VACUNACIÓN: ____/____/____</p>
            <p>ACTIVAR RECORDATORIO
            <input type="checkbox" className="ml-4 w-6 h-6" />
            </p>
          </span>
        </div>
        <div className="block mt-4 ml-16 mr-16 relative  bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
          <p className="text-lg flex justify-center mt-2 ">
            DESPARASITACIÓN
          </p>
          <span className="flex mt-6 ml-8">
            <p className="mr-96">Producto administrado:</p>
            <input type="checkbox" className="ml-80 mr-2 w-6 h-6" />INTERNOS
            <input type="checkbox" className="ml-20 mr-2 w-6 h-6" />EXTERNOS
          </span>
          <p className="text-lg ml-8 mt-6 mb-40">Observaciones:</p>
          <span className="flex justify-between mr-20 mt-6 ml-8 mb-10">
            <p>PRÓXIMA DESPARASITACIÓN: ____/____/____</p>
            <p>ACTIVAR RECORDATORIO
            <input type="checkbox" className="ml-4 w-6 h-6" />
            </p>
          </span>
        </div>
        <div className="flex justify-end mt-2 mr-10">
          <FontAwesomeIcon icon={faFloppyDisk} className=" text-3xl mr-12" />
        </div>
      </div>
        </>
    )
}

export default Vaccination