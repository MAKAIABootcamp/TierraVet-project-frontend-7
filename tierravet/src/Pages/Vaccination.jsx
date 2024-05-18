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
import { useFormik } from "formik";
import { actionAddVaccination } from "../redux/vaccination/vaccinationActions";
import { useDispatch } from "react-redux";

const Vaccination = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      hcNumber: "",
      patientName: "",
      tutorName: "",
      phoneNumber1: "",
      phoneNumber2: "",
      email: "",
      // examen físico
      temperature: "",
      heartRate: "",
      respiratoryRate: "",
      spo2: "",
      tllc: "",
      glucometry: "",
      bloodPressure: "",
      mucosas: "",
      cc: "",
      observations: "",
      //vacunacion
      vaccination: "",
      loteVaccination: "",
      nextVaccination: "",
      lab: "",
      // desparasitación
      deworming: "",
      nextDeworming: "",
    },
    onSubmit: (values) => {
      dispatch(actionAddVaccination(values));
      alert("Vacunación/Desparasitación guardado de forma exitosa");
      console.log(values);
    },
  });

  return (
    <>
      <div className="bg-primary">
        <label className="flex justify-center">
          <div>
            <button className="bg-secondary shadow-lg mb-4 mt-10 hover:bg-primary text-white py-3 px-16 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
              <FontAwesomeIcon icon={faSyringe} className="mr-2" /> NUEVA
              VACUNA/DESPARASITACIÓN
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

        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="relative block ml-16 mr-16 mt-4">
              <label className="absolute left-4 top-2 ml-4 text-xl pointer-events-none">
                HC #:
              </label>
              <input
                type="text"
                name="hcNumber"
                className="w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 pl-20"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hcNumber}
              />
              <span className="absolute inset-0 mt-2 mr-10 flex justify-end text-lg">
                00.00.0000
              </span>
            </div>

            <div className="relative block ml-16 mr-16 mt-2">
              <label className="absolute left-4 top-2 ml-4 text-xl pointer-events-none">
                Nombre del paciente:
              </label>
              <input
                type="text"
                name="patientName"
                className="w-full px-20 py-2 block placeholder-black bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 pl-60"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.patientName}
              />
              <div className="absolute inset-0 mt-2 mr-24 flex justify-end">
                <FontAwesomeIcon
                  icon={faDog}
                  className="text-secondary text-2xl"
                />
              </div>
              <div className="absolute inset-0 mt-2 mr-10 flex justify-end">
                <FontAwesomeIcon
                  icon={faCat}
                  className="text-secondary text-2xl"
                />
              </div>
            </div>

            <div className="flex ml-16 mr-16">
              <div className="relative flex-1">
                <label className="absolute left-4 top-2 ml-4 text-xl pointer-events-none">
                  Nombre del tutor:
                </label>
                <input
                  type="text"
                  name="tutorName"
                  className="w-full py-2 block placeholder-black bg-white border border-y-secondary border-l-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-l-xl sm:text-xl focus:ring-1 pl-60"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.tutorName}
                />
              </div>
              <div className="relative flex-1">
                <label className="absolute left-4 top-2 ml-4 text-xl pointer-events-none">
                  Identificación:
                </label>
                <input
                  type="text"
                  name="tutorId"
                  className="w-full py-2 block placeholder-black bg-white border rounded-r-xl border-y-secondary border-r-secondary focus:outline-none focus:border-secondary focus:ring-secondary sm:text-xl focus:ring-1 pl-40"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.tutorId}
                />
              </div>
            </div>

            <div className="flex ml-16 mr-16">
              <div className="relative flex-1">
                <label className="absolute left-4 top-2 ml-4 text-xl pointer-events-none">
                  Número telefónico #1:
                </label>
                <input
                  type="text"
                  name="phoneNumber1"
                  className="w-full py-2 block placeholder-black bg-white border border-y-secondary border-l-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-l-xl sm:text-xl focus:ring-1 pl-60"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber1}
                />
              </div>
              <div className="relative flex-1">
                <label className="absolute left-4 top-2 ml-4 text-xl pointer-events-none">
                  Número telefónico #2:
                </label>
                <input
                  type="text"
                  name="phoneNumber2"
                  className="w-full py-2 block placeholder-black bg-white border border-y-secondary focus:outline-none focus:border-secondary focus:ring-secondary sm:text-xl focus:ring-1 pl-60"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber2}
                />
              </div>
              <div className="relative flex-1">
                <label className="absolute left-4 top-2 ml-4 text-xl pointer-events-none">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-20 py-2 block placeholder-black bg-white border border-y-secondary border-r-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-r-xl sm:text-xl focus:ring-1 pl-24"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
            </div>
          </div>

          <div className="block mt-4 ml-16 mr-16 relative bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
            <p className="text-lg flex justify-center mt-4 ">EXÁMEN FÍSICO</p>
            <span className="flex justify-center mt-6">
              <p className="mr-20">
                T:{" "}
                <input
                  type="text"
                  name="temperature"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.temperature}
                />
                °C
              </p>
              <p className="mr-20">
                FC:{" "}
                <input
                  type="text"
                  name="heartRate"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.heartRate}
                />
                LPM
              </p>
              <p className="mr-20">
                FR:{" "}
                <input
                  type="text"
                  name="respiratoryRate"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.respiratoryRate}
                />
                RPM
              </p>
              <p className="ml-20">
                SPO2:{" "}
                <input
                  type="text"
                  name="spo2"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.spo2}
                />
                %
              </p>
              <p className="ml-20">
                TLLC:{" "}
                <input
                  type="text"
                  name="tllc"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.tllc}
                />
                SEG
              </p>
            </span>
            <span className="flex justify-center mt-6 ml-8">
              <p className="mr-20">
                GLUCOMETRÍA:{" "}
                <input
                  type="text"
                  name="glucometry"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.glucometry}
                />
                MG/DL
              </p>
              <p className="mr-20">
                PA:{" "}
                <input
                  type="text"
                  name="bloodPressure"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.bloodPressure}
                />
                MMGH
              </p>
              <p className="mr-20">
                MUCOSAS:{" "}
                <input
                  type="text"
                  name="mucosas"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.mucosas}
                />
              </p>
              <p>
                CC:{" "}
                <input
                  type="text"
                  name="cc"
                  className="border-b w-20 border-black"
                  onChange={formik.handleChange}
                  value={formik.values.cc}
                />
              </p>
            </span>
            <p className="ml-8 mt-4">Observaciones:</p>
            <textarea
              name="observation"
              className="w-full px-4 py-16"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.observations}
            />
          </div>

          <div className="block mt-4 ml-16 mr-16 relative bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
            <p className="text-lg flex justify-center mt-4 ">VACUNACIÓN</p>
            <span className="flex mt-6 ml-8">
              <p className="mr-20">
                Vacuna administrada:{" "}
                <input
                  type="text"
                  name="vaccination"
                  className=" w-40 mr-40"
                  onChange={formik.handleChange}
                  value={formik.values.vaccination}
                />
              </p>
              <p className="mr-20">
                LOTE:{" "}
                <input
                  type="text"
                  name="loteVaccination"
                  className="w-40 mr-40"
                  onChange={formik.handleChange}
                  value={formik.values.loteVaccination}
                />
              </p>
              <p className="mr-20">
                Laboratorio:{" "}
                <input
                  type="text"
                  name="lab"
                  className="w-40"
                  onChange={formik.handleChange}
                  value={formik.values.lab}
                />
              </p>
            </span>
            <p className="ml-8 mt-4">Observaciones:</p>
            <textarea
              name="observations"
              className="w-full px-4 py-16"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.observations}
            />
            <span className="flex justify-between mr-20 mt-6 ml-8 mb-10">
              <p className="ml-8 pb-4">
                PRÓXIMA VACUNACIÓN:{" "}
                <input
                  type="text"
                  name="nextVaccination"
                  className=" w-40 border-b border-black"
                  onChange={formik.handleChange}
                  value={formik.values.nextVaccination}
                />
              </p>
              <p>
                ACTIVAR RECORDATORIO
                <input type="checkbox" className="ml-4 w-6 h-6" />
              </p>
            </span>
          </div>

          <div className="block mt-4 ml-16 mr-16 relative bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1 ">
            <p className="text-lg flex justify-center mt-4 ">DESPARASITACIÓN</p>
            <span className="flex mt-6 ml-8">
              <p className="mr-20">
                Producto administrado:{" "}
                <input
                  type="text"
                  name="deworming"
                  className=" w-40 mr-40"
                  onChange={formik.handleChange}
                  value={formik.values.deworming}
                />
              </p>
              <input type="checkbox" className="ml-40 mr-2 w-6 h-6" />
              INTERNOS
              <input type="checkbox" className="ml-20 mr-2 w-6 h-6" />
              EXTERNOS
            </span>
            <p className="ml-8 mt-4">Observaciones:</p>
            <textarea
              name="observations"
              className="w-full px-4 py-16"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.observations}
            />
            <span className="flex justify-between mr-20 mt-6 ml-8 mb-10">
              <p className="ml-8 pb-4">
                PRÓXIMA DESPARASITACIÓN:{" "}
                <input
                  type="text"
                  name="nextDeworming"
                  className=" w-40 border-b border-black"
                  onChange={formik.handleChange}
                  value={formik.values.nextDeworming}
                />
              </p>
              <p>
                ACTIVAR RECORDATORIO
                <input type="checkbox" className="ml-4 w-6 h-6" />
              </p>
            </span>
          </div>
          <div className="flex justify-end mt-2 mr-10">
            <button type="submit">
              <FontAwesomeIcon
                icon={faFloppyDisk}
                className=" text-3xl mr-12"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Vaccination;
