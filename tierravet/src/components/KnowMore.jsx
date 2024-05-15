import React from "react";

const KnowMore = () => {
    return (
      <div className="relative mt-20">
        <img src="https://s3-alpha-sig.figma.com/img/e432/939a/a7cbbc67241724a723edac64e41d1d02?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qS9UTmQSonShP4StG3jKHNN1LSgZhtRUsXFn6OBuKAOiixptT7vIAxkrEUXYADVDMroqMaj9k~mn7OrmR2BEQT6SCop7d4FXcqwxtG1jYEDHIrleRe45zpbkBfqKNKqfYWNa4KA6sSvc9ugvesANq~xAXxQj7l-pomX8mFDvTCJPlaEhu2TvrWoSgFKngjBrT7rbbRj2QfecMA9OfRPRZITrrwJ9qtcUt-mJB4NQmgmW1LG5lbJB-V2Ygc3iqUecOc4T00BjMPysU-0dXWyDeyux3H4Mph-SJtidtdXb2ImyRp~5llNvTv2y6vaPS1aGKGrZ3k53OhKCY4TGHC7J0Q__" alt="Fondo" className="w-full h-[600px] object-cover filter brightness-50" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h2 className="text-5xl font-semibold text-center mb-6 mr-12 ml-12">Transformamos la atención veterinaria con innovación y pasión.</h2>
          <p className="text-lg text-center mb-12">Con TierraVet, cuidar de tu paciente es más fácil.</p>
          <button className="bg-secondary hover:bg-primary text-white py-3 px-16 rounded-lg">Conocer más</button>
        </div>
      </div>
    );
  };
  
  export default KnowMore;
  