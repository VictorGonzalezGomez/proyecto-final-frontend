import AboutUs from "../../components/aboutUs/AboutUs";
import HeroLogin from "../../views/landingPage/HeroLogin";
import Features from "../features/Features";

const HomePage = () => {
  return (
    <>
      <HeroLogin />
      <Features />
      <AboutUs />
    </>
  );
};

export default HomePage;
