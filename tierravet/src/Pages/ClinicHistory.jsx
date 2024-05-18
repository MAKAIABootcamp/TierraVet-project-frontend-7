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
import { useFormik } from "formik";

const ClinicHistory = () => {
  const formik = useFormik({
    initialValues: {
      hcNumber: "",
      patientName: "",
      tutorName: "",
      phoneNumber1: "",
      phoneNumber2: "",
      email: "",
      // anamnesis
      age: "",
      weight: "",
      sex: "",
      microchip: "",
      dietConcentrated: false,
      dietConcentratedName: "",
      dietSaltFood: false,
      dietBARF: false,
      dietOther: "",
      surgeries: false,
      surgeriesDetails: "",
      treatments: false,
      treatmentsDetails: "",
      pathologies: "",
      allergies: "",
      reasonForConsultation: "",
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
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
        </form>

        <form onSubmit={formik.handleSubmit}>
          <div className="block mt-4 ml-16 mr-16 relative  bg-white border border-secondary focus:outline-none focus:border-secondary focus:ring-secondary rounded-xl sm:text-xl focus:ring-1">
            <p className="text-lg flex justify-center mt-2">ANAMNESIS</p>
            <span className="flex mt-4 ml-8">
              <p className="mr-2">Edad:</p>
              <input
                type="text"
                name="age"
                className="mr-4 w-24 py-1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
              />
              <p className="mr-2">Peso:</p>
              <input
                type="text"
                name="weight"
                className="mr-4 w-24 py-1 "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
              />
              <p className="mr-2">Sexo:</p>
              <input
                type="text"
                name="sex"
                className="mr-4 w-24 py-1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sex}
              />
              <p className="ml-2">microchip:</p>
              <input
                type="text"
                name="microchip"
                className="ml-4 py-1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.microchip}
              />
              <p className="ml-2">Esterilizado:</p>
              <input
                type="checkbox"
                name="sterilized"
                className="ml-4 w-6 h-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.sterilized}
              />
              <p>SI</p>
              <input
                type="checkbox"
                name="notSterilized"
                className="ml-4 w-6 h-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={!formik.values.sterilized}
              />
              <p>NO</p>
            </span>
            <span className="flex mt-4 ml-8">
              <p>Dieta:</p>
              <input
                type="checkbox"
                name="dietConcentrated"
                className="ml-4 mr-2 w-6 h-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.dietConcentrated}
              />
              <p>Concentrado</p>
              {formik.values.dietConcentrated && (
                <>
                  <p className="ml-8">¿Cuál?:</p>
                  <input
                    type="text"
                    name="dietConcentratedName"
                    className="ml-2 py-1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dietConcentratedName}
                  />
                </>
              )}
              <input
                type="checkbox"
                name="dietSaltFood"
                className="ml-12 mr-2 w-6 h-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.dietSaltFood}
              />
              <p>Comida de sal</p>
              <input
                type="checkbox"
                name="dietBARF"
                className="ml-12 mr-2 w-6 h-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.dietBARF}
              />
              <p>BARF</p>
              <p className="ml-12">Otro:</p>
              <input
                type="text"
                name="dietOther"
                className="ml-2 py-1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dietOther}
              />
            </span>

            <span className="flex mt-4 ml-8">
              <p>Cirugías:</p>
              <input
                type="checkbox"
                name="surgeries"
                className="ml-4 w-6 h-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.surgeries}
              />
              <p>SI</p>
              <input
                type="checkbox"
                name="notSurgeries"
                className="ml-4 w-6 h-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={!formik.values.surgeries}
              />
              <p>NO</p>
              {formik.values.surgeries && (
                <>
                  <p className="ml-8">¿Cuál?:</p>
                  <input
                    type="text"
                    name="surgeriesDetails"
                    className="ml-4 px-2 py-1 "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.surgeriesDetails}
                  />
                </>
              )}
            </span>

            <span className="flex mt-4 ml-8">
              <p className="mr-2">Patologías:</p>
              <input
                type="text"
                name="pathologies"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pathologies}
              />
              <p className="ml-96">Alergias:</p>
              <input
                type="text"
                name="allergies"
                className="ml-4 px-2 py-1 "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.allergies}
              />
            </span>
            <p className="ml-8 mt-4">Motivo de consulta:</p>
            <textarea
              name="reasonForConsultation"
              className="w-full px-4 py-16"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.reasonForConsultation}
            />
          </div>
        </form>

        <form onSubmit={formik.handleSubmit}>
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
            <div className="inline-grid grid-cols-4 gap-10 mt-10 ml-40">
              <img
                src="https://i.ibb.co/XtzPJZ8/dog2.png"
                alt="dog-position4"
              />
              <img src="https://i.ibb.co/SXt5xHR/dog.png" alt="dog-position3" />
              <img
                src="https://i.ibb.co/fvwkp8K/dogp.jpg"
                alt="dog-position1"
                className=""
              />
              <img
                src="https://i.ibb.co/DbCd2GF/Imagen2.png"
                alt="dog-position2"
                className="w-20"
              />
            </div>
            <p className="ml-8 mt-4">Observaciones:</p>
            <textarea
              name="reasonForConsultation"
              className="w-full px-4 py-16"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.reasonForConsultation}
            />
          </div>
        </form>

        <div className="flex justify-end mt-2 mr-10">
          <button type="submit">
            <FontAwesomeIcon icon={faFloppyDisk} className=" text-3xl mr-12" />
          </button>
        </div>

        <label className="flex ml-16">
          <div>
            <button className="bg-secondary shadow-lg mb-4 mt-10 hover:bg-primary text-white py-3 px-16 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
              <FontAwesomeIcon icon={faHospital} className="mr-2" /> ABORDAJE
              CLÍNICO
            </button>
          </div>
        </label>
        <label className="flex ml-16">
          <div>
            <button className="bg-secondary shadow-lg mb-4 hover:bg-primary text-white py-3 px-16 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
              <FontAwesomeIcon icon={faFlask} className="mr-2" /> EXÁMENES
              COMPLEMENTARIOS
            </button>
          </div>
        </label>

        <label className="flex ml-16">
          <button className="bg-secondary shadow-lg mb-4 hover:bg-primary text-white py-3 px-16 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
            <FontAwesomeIcon icon={faViruses} className="mr-2" /> DIAGNÓSTICO
          </button>
        </label>
        <label className="flex ml-16">
          <button className="bg-secondary shadow-lg mb-4 hover:bg-primary text-white py-3 px-16 lg:text-left lg:inline-block lg:mr-2 rounded-xl sm:text-2xl">
            <FontAwesomeIcon icon={faFlask} className="mr-2" /> TRATAMIENTO
          </button>
        </label>
      </div>
    </>
  );
};

export default ClinicHistory;
