import React from "react";
import {Link} from "react-router-dom"

const ExploreServices = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center mb-8 ">
      <img src="https://s3-alpha-sig.figma.com/img/a185/f570/caf5de3cdbb6dcfd4e09454141841fd4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-5Pbp4wCf05f6h8rYAwI9r7616wrXmAieKVjDjFUgk7ghScI4fZwk9Z~8w969H-kTV8SO~PhCwGqSb8ODGnN7y2EpOksEvaLXgoy3wXN8ommJuB~I~D9TyBnBdQQNGCFh-Pgc~HcLIWIxANTmXGBw4mvt-bKPNZWDK5pn7hV3ZIW5cMDEZ4KMVPi4vPGJHwleVOXDPTGOv-DcbU2nJWLX62y5xOE5sVutNZwCOYgC7l9UlxKU1x870wURhTFcSCRRiRu~M5Cc0iM0F5C3ttHtuevXfiM67wxD8Zr2zuymnyVYs9mTzG7tynT3-xxQfrLIVOLO2rWZ2zbHdJlXEm4A__" alt="Servicios" className="w-[360px] h-[420px] mb-8 lg:mb-0" />
      <div className="text-center mt-16 lg:text-left">
        <h2 className="text-lg font-semibold mb-4 bg-primary text-white inline-block p-2 rounded-lg">Seguimiento Excepcional</h2>
        <p className="text-md font-bold mb-4">Rápido, sencillo y eficiente.</p>
        <p className="text-sm mb-4">Una forma innovadora y ordenada de organizar datos y registros veterinarios.</p>
        <Link className="bg-transparent text-blue-300" to="/aboutUs" >
          Explorar Servicios
        </Link>
      </div>
    </div>
  );
};

export default ExploreServices;
