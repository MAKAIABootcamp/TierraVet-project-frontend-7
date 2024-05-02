import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDog,  
    faFloppyDisk,
    faHouseChimney,
    faPenToSquare,
    faPersonWalkingArrowRight
 } from "@fortawesome/free-solid-svg-icons";

const EditPatient = () => {
  return (
    <>
      <div className="bg-primary">
        <div>
          <div className="flex justify-between pt-4 ml-6 mr-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/226f/96ef/def22b71dcb004d652b323420dd58ddb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKDbvfQXX521b7tMopxAanxInjEv6CwQcKpRdVs-hsLS9Cyhg18A~W~h3anI8FfTHEDtMmXuhqfNJO1uvqEikTpO0biJFm2-f8~EXQOkNAWP058k59VtnNXzh0dK8Z6PtmwRInxlDI7frG42Xra356T3pa1C~G9TXLVPMtkrtZnxruQC34kHh-PWB9PUnP347GgpSyQxHgr8Eob36984pTb5J-Aro2HJ8FJDpqfJ6tSMt9Uxb8CwAaDbIHTiB1zJdOrppF5S27C171LhWjlyekzv3b3Tfi0-CcYAV8eawtSVdhXF5BmzLPa1FDEpBeRBHbqZGiEc6bfWmEtB~-HUpg__"
              alt="logo"
              className="max-w-20 "
            />
            <FontAwesomeIcon
              icon={faPersonWalkingArrowRight}
              className="text-secondary mt-6 mr-6 text-5xl"
            />
          </div>
          <nav className="flex justify-center p-4 font-sans text-2xl text-secondary divide-x-2">
            <a
              href="/users-list"
              className="font-medium  hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2 "
            >
              <FontAwesomeIcon icon={faHouseChimney} />
            </a>
            <a
              href="/patients-list"
              className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2 "
            >
              Pacientes
            </a>
            <a
              href="/clinic-history"
              className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2 "
            >
              Consultas
            </a>
            <a
              href="/prescription"
              className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2 "
            >
              Fórmulas
            </a>
            <a
              href="/referrals"
              className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2 "
            >
              Remisiones
            </a>
            <a
              href="/telehealth"
              className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2 "
            >
              Telemedicina
            </a>
          </nav>
        </div>

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
            <FontAwesomeIcon
              icon={faPenToSquare}
              className=" text-2xl mt-40 ml-40 absolute"
            />
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
