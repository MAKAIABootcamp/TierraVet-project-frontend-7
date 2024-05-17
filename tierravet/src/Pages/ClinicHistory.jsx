import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faHeartPulse,
  faFlask,
  faViruses,
  faSyringe,
  faHospital,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ClinicHistory = () => {
  return (
    <>
      <div className="bg-primary">
        <label className="flex justify-center">
          <div>
            <button className="bg-secondary shadow-lg mb-4 mt-10 hover:bg-primary text-white py-3 px-16 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
              <FontAwesomeIcon icon={faHeartPulse} className="mr-2" /> Nueva
              consulta
            </button>
          </div>
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
          <p className="text-lg flex justify-center mt-2 ">ANAMNESIS</p>
          <span className="flex mt-4 ml-8">
            <p className="mr-20">Edad:</p>
            <p className="mr-20">Peso: ____ Kg</p>
            <p className="mr-20">Sexo:</p>
            <p className="ml-20">microchip:</p>
            <p className="ml-60">
              {" "}
              Esterilizado:
              <input type="checkbox" className="ml-4 w-6 h-6" /> SI
              <input type="checkbox" className="ml-4 w-6 h-6" /> NO
            </p>
          </span>
          <span className="flex mt-4 ml-8">
            <p>
              {" "}
              Dieta:
              <input type="checkbox" className="ml-4 mr-2 w-6 h-6" />
              Concentrado
            </p>
            <p className="ml-8">¿Cuál? : _________________ </p>
            <p className="ml-4">
              <input type="checkbox" className="ml-12 mr-2 w-6 h-6" />
              Comida de sal
              <input type="checkbox" className="ml-12 mr-2 w-6 h-6" />
              BARF
            </p>
            <p className="ml-12">Otro: __________________ </p>
          </span>
          <span className="flex mt-4 ml-8">
            <p>
              {" "}
              Cirugías:
              <input type="checkbox" className="ml-4 w-6 h-6" /> SI
              <input type="checkbox" className="ml-4 w-6 h-6" /> NO
            </p>
            <p className="ml-8">¿Cuál? : _________________ </p>
          </span>
          <span className="flex mt-4 ml-8">
            <p>
              {" "}
              Tratamientos:
              <input type="checkbox" className="ml-4 w-6 h-6" /> SI
              <input type="checkbox" className="ml-4 w-6 h-6" /> NO
            </p>
            <p className="ml-8">¿Cuál? : _________________ </p>
          </span>
          <span className="flex mt-4 ml-8">
            <p className="mr-20">Patologías:</p>
            <p className="ml-96">Alergias:</p>
          </span>
          <p className="text-lg ml-8 mt-4 mb-40">Motivo de consulta:</p>
        </div>

        <div className="block mt-4 ml-16 mr-16 relative  bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
          <p className="text-lg flex justify-center mt-2 ">EXÁMEN FÍSICO</p>
          <span className="flex justify-center mt-4 ml-8">
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
          <div className="inline-grid grid-cols-4 gap-4 mt-10 ml-40">
            <img
              src="https://s3-alpha-sig.figma.com/img/62c8/0e0e/654b9afbbaafeb8a831abe12dc4b9059?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dtJWliCgsZE5BhWY~rJgLSaR7IZbyVvjmuXKheThnERYW1KzoO1GnpRD6JBJR5xVjQqcfbYfZbPfEQKBi2nGIc9gNKBy5d0HlRB9fRedhWgGm8kktXdoSZ-2W-bx47lTT3P2YGapp2LFoE86635bO0lOEN5RJRNKgUIqUH2i4knUGmqI-ZruD1X~iH5Mu-~KwszyGI3x9YohQvRGjZV9ZOkEgp1y2pQz8Yf11sU~Gkn0qeYnRf9CAIECjw2ITcMn-US~KaDavkxatUOAG92g2k2014K0FhYBx2nK6A3BzKDEe0z9Lak98O-TCfsmtFDLmENBdOgXxKHVOY6SswaNNg__"
              alt="dog-position4"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/cb8e/82a6/aae3b9549dce3725e2e6ce207e3590e5?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JcegsxVm5ITEZ1l6a~Uq1CBVemalwjo1BwyMIYyIOc1~n4ojgLH24~0KJuV3RobXz6WrmuGtPr0~dGKhTGIfMseOsf1u-reQJhrgIjeTVW12E2ac0nY5LJAfLW8rd-mF8FxQPqOs6LOKM8u3TZzZprLeOmLt9pmjqt6sGLQtO5nefaVea11TFHMOt8vTxGlY2UMhl1lV0Ybs7pJ-YR7Sg9Z5aAsyiZ-vQjP~F4nplajWAwaL4JM0QgqYC8fxu2rQfpN7f2K98CoBQH8lXoE4a~GQB5zhzmLbgZFgzgsm5yTATbTY2OHnrDiNHXTZdVXNUPTCY8QobfnQNs6KZUPbHw__"
              alt="dog-position3"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/39c0/d99a/feb825a72ccbca5363f765ea21c471cb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~lEDjgyrg9My5eYRPVsqNuouJbMizQfu48XX1Eoq2~8YWBFLzYT9RvJYj-jYYKbgnK07VWnllKVKQdQL1cxLPXaiLrFQSRwBy7EdVDOkr32bflbtKcxLgvHujHQ5VantlXnX30xBh7qDxId6lNylZhYGFMyZdQLjctIBRu8vkpfacw9JEY~c3gUytMYkwwU4iUf5d1TUDN9E~gmBBmfAX14MTNtSbjOxuEnfR0cQ0QXOfooHxNm-PDlRDGQfg-kM8ixkCg0swPaOvOxsko2WQ5ORXQQvMqUO4LjKxMYqnexkUCpkb21NLQ0qZbIiEkr6HEpFes5zlEepgWdhvCPPg__"
              alt="dog-position2"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/cfcd/0a78/e301e32d9cd0ba3343c96c1bd1f4aff5?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEy59ZhnXNRvNiUg8SlwsHIAbzZxmAXjweMvE3T19MzKjZUsmyfAoRg~YiUgY5YFn5evH9InTTbgvOHbCrBmpg95JkI3syi2Ti8Q04C9aBTxr1llCCd2c26X6-eUKcFHH45HjcVqANAK0~rVjXj20xvDDXW60fKxw~YzZguw8oJWDXrYGoywpyIzb5-aUx4VtyTuWi7fqsMpG5LGad4Hk4A9taV3DYQ38MGav1rOqC7dGzErnMhJRR6NbhwTgEtkUrWOaWCH6dvuqh-PgQuFHla1iK4hmZ81ZgMzfivYjMpHBkeAXagGPvMx~kaYB1PjBE4cxI1AsWqYeqwZdK514Q__"
              alt="dog-position1"
              className="w-24"
            />
          </div>
          <p className="text-lg ml-8 mt-4 mb-40">Observaciones:</p>
        </div>

        <div className="flex justify-end mt-2 mr-10">
          <FontAwesomeIcon icon={faFloppyDisk} className=" text-3xl mr-12" />
        </div>

        <label className="flex ml-16">
          <div className="absolute">
            <FontAwesomeIcon
              icon={faHospital}
              className="text-white  text-2xl pl-10 py-6"
            />
          </div>
          <input
            type="text"
            name="approach"
            className=" mt-4 pl-14 py-2 text-center bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="ABORDAJE CLÍNICO"
          />
        </label>
        <label className="flex ml-16">
          <div className="absolute">
            <FontAwesomeIcon
              icon={faFlask}
              className="text-white text-2xl pl-10 py-6"
            />
          </div>
          <input
            type="text"
            name="exam"
            className="mt-4 pl-6 py-2 text-center w-1/3 bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="EXÁMENES COMPLEMENTARIOS"
          />
        </label>
        <label className="flex ml-16">
          <div className="absolute">
            <FontAwesomeIcon
              icon={faViruses}
              className="text-white text-2xl pl-10 py-6"
            />
          </div>
          <input
            type="text"
            name="diagnosis"
            className="mt-4 pl-8 py-2 text-center bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="DIAGNÓSTICO"
          />
        </label>
        <label className="flex ml-16">
          <div className="absolute ">
            <FontAwesomeIcon
              icon={faSyringe}
              className="text-white text-2xl pl-12 py-6"
            />
          </div>
          <input
            type="text"
            name="treatment"
            className=" mt-4 pl-8 py-2 text-center bg-secondary border shadow-lg border-secondary placeholder-white focus:outline-none focus:border-secondary focus:ring-secondary block  rounded-xl sm:text-xl focus:ring-1"
            placeholder="TRATAMIENTO"
          />
        </label>
      </div>
    </>
  );
};

export default ClinicHistory;
