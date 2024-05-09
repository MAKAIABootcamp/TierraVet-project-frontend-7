import React from "react";

const Reviews = () => {
    return (
      <div className="bg-primary text-white p-8">
        <h2 className="text-2xl text-center font-semibold mb-8">¿QUÉ DICEN NUESTROS USUARIOS?</h2>
        <div className="max-w-[869px] mx-auto">
          <div className="bg-white rounded-lg p-6 mb-8 shadow-xl">
            <p className="text-md text-center mb-4 mt-4 text-black">¡TierraVet ha sido una herramienta invaluable para nuestro equipo veterinario! La facilidad para programar citas y acceder a la información médica de nuestros pacientes ha mejorado enormemente nuestra eficiencia. Además, el soporte excepcional del equipo de TierraVet ha sido crucial para resolver nuestras consultas rápidamente. ¡Recomendamos TierraVet a todos los colegas veterinarios que buscan optimizar sus procesos clínicos!</p>
            <img src="https://s3-alpha-sig.figma.com/img/420a/c2dd/0063fdb34b622906d7009478e61f504f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VscXJkllX-pC~vEKIH4QLTzSw3x2~emGQkov3mlMMab2lxWjs--H0vLywsr0bAMbQFPtPTvfDYOBbpWm9kZe4RUHgYlH7LBhUFrIv9XeAeoOks8azUDhn5XdGH2TTRYobcAxF6YRhHE0gkwBGMVquvUB7vq75iUXYU-2TgNqLGr~jfR6yFOLwPtl53aI5bFmby~RLcFvScjCyP5vy-kPPychGnjQhpDNWcO9DR46j3vNLB1NGa4tDWJDzFDOnY~W-5c87lRD-p6AeJ3s1Hve1oFbAM5GrE-tTQ103VV9IEtMct0Ef8SV6iJyGm3uC~vv-F~Wbj5ejfx4B1Zu~TYaWA__" alt="Usuario" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <p className="text-primary text-center text-lg mb-1">Luisa Torres</p>
            <p className="text-black text-center text-sm mb-4">Médico Veterinario</p>
            <div className="flex justify-center">
              <span className="text-gray-500">&#8226;</span>
              <span className="text-green-500">&#8226;</span>
              <span className="text-gray-500">&#8226;</span>
              <span className="text-gray-500">&#8226;</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Reviews;
  