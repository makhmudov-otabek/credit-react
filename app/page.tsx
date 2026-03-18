import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Career from "./components/Career";
import Location from "./components/Location";

export default function Home() {
  return (
    <div className="container m-auto">
      <Navbar />
      <HomeComponent />
      <WhyUs />
      <HowItWorks />
      <Career />
      <Location />
    </div>
  );
}
