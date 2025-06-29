import CryptoTaxCalculator from "../components/CryptoTaxCalculator";
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import DesktopCard from "../components/DesktopCard";
import MobileCard from "../components/MobileCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="bg-default-gray min-h-screen">
      <Navbar />
      <div className="bg-default-gray w-full px-6  max-w-[83rem] mx-auto xl:flex gap-5   ">
        <div className=" bg-white w-full  max-w-[55.0625rem]  xl:bg-default-gray pt-4 px-4 sm:px-0  xl:pt-0 ">
          <CryptoTaxCalculator />
          <FAQ />
        </div>
        <div className="w-[95%] sm:w-full mx-auto  mt-[2.25rem] mb-[2.875rem] lg:mt-3 lg:mb-0">
          <MobileCard className="xl:hidden" />
          <DesktopCard className="hidden xl:block xl:mx-0" />
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Home;
