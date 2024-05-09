import React from "react";

const AboutUs = () => {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="w-full lg:w-1/2">
          <p className="text-lg mb-6 text-center lg:text-left">En TierraVet, nos dedicamos apasionadamente a revolucionar la atención veterinaria. Nuestra plataforma se ha desarrollado con un enfoque centrado en el bienestar de los animales y la comodidad de sus tutores. Desde la gestión simplificada de historias clínicas hasta la programación eficiente de citas y el seguimiento personalizado de tratamientos, ofrecemos una solución integral para facilitar la comunicación y la colaboración entre profesionales veterinarios y tutores. Con tecnología innovadora y un equipo comprometido, estamos aquí para marcar la diferencia en la salud y la felicidad de los animales que tanto queremos.</p>
          <button className="bg-secondary hover:bg-primary text-white py-3 px-16 rounded-lg block mx-auto lg:text-left lg:inline-block lg:mr-2">Ingresar</button>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  