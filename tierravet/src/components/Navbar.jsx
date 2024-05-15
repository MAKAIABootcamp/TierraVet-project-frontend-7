import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";
import { actionLogout } from "../redux/auth/userAuthActions";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actionLogout());
  };

  return (
    <div className="bg-primary">
      <div className="flex justify-between pt-4 ml-6 mr-6">
        <img
          src="https://s3-alpha-sig.figma.com/img/226f/96ef/def22b71dcb004d652b323420dd58ddb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k2Kw95g4bKG4~RGGuxsJr950HTtBWGY0e8jXz-e1W-G~VdBWfWL0arLyXB3EX77~IC60O~QNhflnlHDrRrWmI60Eb-tQx~DZJUSTrgQx~ZLXkA8hQMPXh8a9DOn-4yxiiga5yWFl51Uh5DEg-oR2Ty6ofIkRYRABqcNjV7IYnTXubfB55AM~P8LFZnXIhk2dHaBEQwPkPGhC0hfdbJFeNOn9URnXpt6dkBag0CI6eVffczne9bcmm~Vf5v~0xPzdKTjSo8IMuOxP0FTUM38AiJkaVjqFHCjB1yA087q6T3OfzGhE~-zXul0lt60HVPHeDWHCIP9i4Ebap16OTQ-cew__"
          alt="logo"
          className="max-w-20"
        />
        <NavLink to="/" onClick={handleLogout}>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="text-secondary mt-6 mr-6 text-5xl cursor-pointer"
          />
        </NavLink>
      </div>
      <nav className="flex justify-center p-4 font-sans text-2xl text-secondary divide-x-2">
        <NavLink
          to="/users"
          className="font-medium hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Usuarios
        </NavLink>
        <NavLink
          to="/patients-list"
          className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Pacientes
        </NavLink>
        <NavLink
          to="/clinic-history"
          className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Consultas
        </NavLink>
        <NavLink
          to="/prescription"
          className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Fórmulas
        </NavLink>
        <NavLink
          to="/referrals"
          className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Remisiones
        </NavLink>
        <NavLink
          to="/telehealth"
          className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Telemedicina
        </NavLink>
        <NavLink
          to="/statistics"
          className="font-medium ml-6 pl-6 hover:bg-secondary hover:text-white hover:shadow-lg hover:rounded-lg hover:px-8 hover:py-2"
          activeClassName="text-white bg-secondary"
        >
          Informes y Estadísticas
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
