import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarHome = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-secondary fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 z-50">
      <div className="ml-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/226f/96ef/def22b71dcb004d652b323420dd58ddb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k2Kw95g4bKG4~RGGuxsJr950HTtBWGY0e8jXz-e1W-G~VdBWfWL0arLyXB3EX77~IC60O~QNhflnlHDrRrWmI60Eb-tQx~DZJUSTrgQx~ZLXkA8hQMPXh8a9DOn-4yxiiga5yWFl51Uh5DEg-oR2Ty6ofIkRYRABqcNjV7IYnTXubfB55AM~P8LFZnXIhk2dHaBEQwPkPGhC0hfdbJFeNOn9URnXpt6dkBag0CI6eVffczne9bcmm~Vf5v~0xPzdKTjSo8IMuOxP0FTUM38AiJkaVjqFHCjB1yA087q6T3OfzGhE~-zXul0lt60HVPHeDWHCIP9i4Ebap16OTQ-cew__"
          alt="Logo"
          className="h-16"
        />
      </div>
      <div className="mr-4">
        <button
          className="bg-blue-300 hover:bg-blue-400 text-white py-2 px-7 rounded-lg"
          onClick={handleNavigateToLogin}
        >
          Ingresar
        </button>
      </div>
    </nav>
  );
};

export default NavbarHome;
