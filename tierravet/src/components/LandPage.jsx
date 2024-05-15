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
          <img src="https://s3-alpha-sig.figma.com/img/e168/2903/a20f5cfd8706566500ccc801a2f1452f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CE5hsfG4XxijJOaEPvmWTl4Dg-8L3eUsDq4BhMAbiC~PhDirmzqCLdDldV-VsAaOVwB~CtchwvPL08FDG9zAa~7UbJn0U6u76UjgRRREYTqZ2Cur4nSLLJse-1PfDKHsaGKteoJ4Tl4YqnmvhAWGhl6I82ANcjWOAWafH7kSafngcElqlU660t~k3ccfw4uXNw-6QsRz2-9uo0rtejJ0cyvOlednBvBtCnxynWnh873XSHSNWX4PG5lTDyzB79U3LYTmlrTjDfcJG4oBD6Sp2RYfjfKo-jvAjTKq7-cdypZlxBcTqlAt90UXCPaJhs37juVXgFbtIyjVg0y7g2tF6w__" alt="Imagen" className="max-w-full h-58" />
        </div>
      </div>
    );
  };
  
  export default Landpage;
  