import React from "react";

const Contact = () => {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-center mb-8">¿Tienes alguna pregunta?</h2>
          <div className="flex flex-col lg:flex-row">
            {/* Imagen */}
            <div className="w-full lg:w-[630px] mb-8 lg:pr-4 lg:mr-28">
              <img src="https://s3-alpha-sig.figma.com/img/3a02/0ffb/31b94a7733a7843935108ba2fca6f213?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2t2Y0KfkaY4k5AGNNHYtptMcUmpYDLXLecXKTixlbJ3I-YH2FOW4674vVZ77zlmaG4-ioIqLYDBQxMN4s557MHNrauPdWo~9SyDS7ps7AS3S66qvtlH9tbPVx0Zrd9w2PaJ2C-pi12SFLLnAwHp-ybahaQtew5q7EbVcfW-piajcBMLwQNpkE~jKTizhIRUpoaJdYsmKLWmH2~FBsl7zCRHBO7r2klE33toQ~6kcdiNmt67MT8gydOZ6PTkZXrGDDMuKsYWk-p9aM-cm4rtX-NqTQobilEFIOX7pTr2E3TmAtqKnJM81dMLrBsYILLeUxcBhw14gRRc7wazWFy~sg__" alt="Contacto" className="w-full h-full rounded-lg" />
            </div>
            {/* Formulario */}
            <div className="w-full lg:w-[400px] h-[450px] bg-primary rounded-lg pl-4 mt-20">
              <form className="p-6 flex flex-col">
                <h3 className="text-3xl text-white font-semibold mb-6">Contáctanos</h3>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1 text-white">Nombre</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-primary" placeholder="Ingresa tu nombre" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 text-white">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-primary" placeholder="Ingresa tu email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-1 text-white">Celular</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-primary" placeholder="Ingresa tu número de celular" />
                </div>
                <button type="submit" className="bg-secondary hover:bg-blue-400 mt-4 text-white py-2 px-12 rounded-lg shadow-md mx-auto">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  