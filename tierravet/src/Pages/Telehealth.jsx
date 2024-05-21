import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEnvelope,
  faPaw,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "../components/Calendar";

const Telehealth = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="flex justify-center pt-20 gap-60">
          <button className="bg-secondary shadow-lg mb-4 hover:bg-primary text-white py-3 px-16 mt-4 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
            <FontAwesomeIcon icon={faCalendarDays} className="mr-2" /> Agenda
          </button>
          <button className="bg-secondary ml-40 mb-4 shadow-lg hover:bg-primary text-white py-3 px-16 mt-4 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
            <FontAwesomeIcon icon={faTruckMedical} className="mr-2" /> Domicilio
          </button>
        </div>

        <div className="flex gap-20">
          <div className="App flex mt-12 ml-60">
            <Calendar />
          </div>
          <div className="flex ml-20">
            <div className="block mt-4 ml-16 bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
              <p className="text-lg flex justify-center mt-2 ">
                RUTAS GUARDADAS
              </p>
              <span className="flex mt-4 ml-8">
                <p className="mr-2">Tierra</p>
                <p className="mr-20 text-tertiary">/ Isabel Labrador</p>
                <p className="mr-20 text-tertiary">Calle 32b#78e-50</p>
              </span>
              <img
                className="mt-4 mb-4 mx-auto"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0OIDU5S1IbV96N94v3-09AAAAA%26pid%3DApi&f=1&ipt=f52aa7d252de1ff37b45683530ef11817bb429af6dd1b74c024d8b05b8a275fd&ipo=images"
                alt="ruta"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex justify-center gap-20 ml-80">
            <div className="block mt-4 pr-4 bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
              <p className="text-lg flex justify-center mt-2 ">MEDIO</p>
              <span className="flex-col mt-4 ml-8 grid grid-cols-2 gap-2 mb-2">
                <p>
                  <input
                    name="type"
                    type="radio"
                    className="relative mr-2 h-6 w-6 cursor-pointer rounded-full appearance-none border-8 border-secondary text-secondary transition-all checked:border-gray-900 "
                    id="html"
                  />
                  Vía WhatsApp
                </p>
                <p>
                  <input
                    name="type"
                    type="radio"
                    className="relative mr-2 h-6 w-6 cursor-pointer rounded-full appearance-none border-8 border-secondary text-secondary transition-all checked:border-gray-900 "
                    id="html"
                  />
                  Llamada telefónica
                </p>
                <p>
                  <input
                    name="type"
                    type="radio"
                    className="relative mr-2 h-6 w-6 cursor-pointer rounded-full appearance-none border-8 border-secondary text-secondary transition-all checked:border-gray-900 "
                    id="html"
                  />
                  Vía Telegram
                </p>
                <p>
                  <input
                    name="type"
                    type="radio"
                    className="relative mr-2 h-6 w-6 cursor-pointer rounded-full appearance-none border-8 border-secondary text-secondary transition-all checked:border-gray-900 "
                    id="html"
                  />
                  Google Meet
                </p>
                <p>
                  <input
                    name="type"
                    type="radio"
                    className="relative mr-2 h-6 w-6 cursor-pointer rounded-full appearance-none border-8 border-secondary text-secondary transition-all checked:border-gray-900 "
                    id="html"
                  />
                  Zoom
                </p>
              </span>
            </div>
            <div className="text-center mt-4">
              <button className="bg-secondary shadow-lg mb-4 hover:bg-primary text-white py-3 px-16 mt-4 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
                <FontAwesomeIcon icon={faPaw} className="mr-2" /> ASIGNAR
                PACIENTE
              </button>
              <button className="bg-secondary mb-4 shadow-lg hover:bg-primary text-white py-3 px-16 mt-4 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> ENVIAR
                CONFIRMACIÓN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Telehealth;
