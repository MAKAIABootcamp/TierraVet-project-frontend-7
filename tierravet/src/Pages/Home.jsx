import NavbarHome from "../components/NavbarHome";
import Landpage from "../components/LandPage";
import Services from "../components/Services";
import ExploreServices from "../components/ExploreServices";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      <NavbarHome></NavbarHome>
      <Landpage></Landpage>
      <Services></Services>
      <ExploreServices></ExploreServices>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
