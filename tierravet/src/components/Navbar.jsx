import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary">
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
            Usuarios
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
          <a
            href="/statistics"
            className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2 "
          >
            Informes y Estadísticas
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
