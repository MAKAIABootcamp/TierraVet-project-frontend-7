import React from "react";

const Landpage = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-center items-center bg-primary p-8 mt-20 pb-0">
        <div className="w-full lg:w-1/2 mx-auto lg:ml-6 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4">Optimiza la práctica veterinaria con TierraVet.</h1>
          <p className="text-lg text-gray-600 mb-8">Explora todos los beneficios de forma gratuita registrándote.</p>
          <button className="bg-secondary hover:bg-blue-400 text-white py-2 px-12 rounded-lg shadow-md">
            Ingresar
          </button>
        </div>
  
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <img src="https://s3-alpha-sig.figma.com/img/e168/2903/a20f5cfd8706566500ccc801a2f1452f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DclA6rB8sqov~C5HIrnEAgsGYnikMvmwab7bT0MRx2~JjZWBfuiswFWotLL0v0hO-rMGA7pwQlbWjBYEM5cDpCPjJQgeDGEk61GIMNRej3W9lgA8X~m6LW88DHHzFMkVR19cBxPrqavPcUL7h7x6VtZzIgEeJledc2cZIoSJQOUkF5HbByU75I7r3SHiMFOCP1SEEa8Vj1C9om~76OLcl-wofjXzaiUN7iHlN7DZejhRi74cXfvG54dQHloLGEQYVswFV8~cgM80g0voOM5HDvaPAWfRkOpk6SgQeDt-pBhPv~lSDoDrSBIEa4IRibJ~Q6POXb2VDsFaU43d4aZLow__" alt="Imagen" className="max-w-full h-58" />
        </div>
      </div>
    );
  };
  
  export default Landpage;
  