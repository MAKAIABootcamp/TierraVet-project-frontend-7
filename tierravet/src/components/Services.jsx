import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faSuitcaseMedical, faDog } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que necesitas

const Services = () => {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl mt-8 mb-16">Gestión Veterinaria Intuitiva</h2>

      {/* Servicios */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:justify-between">
        {/* Primer servicio */}
        <div className="max-w-xs mx-auto">
          <FontAwesomeIcon icon={faUserDoctor} className="mx-auto text-5xl text-secondary mb-4" /> 
          <h3 className="text-xl font-semibold mb-2">Registro Simplificado</h3>
          <p className="text-gray-600 mb-4">Captura rápidamente la información médica de tus pacientes.</p>
        </div>

        {/* Segundo servicio */}
        <div className="max-w-xs mx-auto">
          <FontAwesomeIcon icon={faSuitcaseMedical} className="mx-auto text-5xl text-secondary mb-4" /> 
          <h3 className="text-xl font-semibold mb-2">Citas organizadas</h3>
          <p className="text-gray-600 mb-4">Programa consultas y seguimientos sin complicaciones.</p>
        </div>

        {/* Tercer servicio */}
        <div className="max-w-xs mx-auto">
          <FontAwesomeIcon icon={faDog} className="mx-auto text-5xl text-secondary mb-4" /> 
          <h3 className="text-xl font-semibold mb-2">Información detallada</h3>
          <p className="text-gray-600 mb-4">Accede a análisis completos sobre la salud de tus pacientes.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
