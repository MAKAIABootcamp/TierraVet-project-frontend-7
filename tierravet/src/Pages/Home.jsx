import Layout from "../components/Layout";
import Landpage from "../components/LandPage";
import Services from "../components/Services";
import ExploreServices from "../components/ExploreServices";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      <Layout></Layout>
      <Landpage></Landpage>
      <Services></Services>
      <ExploreServices></ExploreServices>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
