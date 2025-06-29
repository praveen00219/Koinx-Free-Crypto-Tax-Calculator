import CryptoTaxCalculator from "../components/CryptoTaxCalculator";
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import DesktopCard from "../components/DesktopCard";
import MobileCard from "../components/MobileCard";

const Home = () => {
  return (
    <section className="bg-default-gray min-h-screen">
      <Navbar />
      <div className="bg-default-gray w-full  max-w-[83rem] mx-auto xl:flex gap-5   ">
        <div className=" bg-white w-full  max-w-[55.0625rem]  xl:bg-default-gray pt-4 px-4 sm:px-0  xl:pt-0 ">
          <CryptoTaxCalculator />
          <FAQ />
        </div>
        <div className="w-[95%] sm:w-full mx-auto  mt-[4.25rem] mb-[3.875rem] lg:mt-7 lg:mb-0">
          <MobileCard className="xl:hidden" />
          <DesktopCard className="hidden xl:block xl:mx-0" />
        </div>
      </div>
    </section>
  );
};
export default Home;
