import FaqContentLarge from "./FaqContentLarge";
import FaqContentSmall from "./FaqContentSmall";
const FAQ = () => {
  return (
    <div className="bg-white w-[95%]  xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto  pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl xl:mb-24">
      <h2 className="text-2xl font-bold  leading-5 mb-4 lg:pb-4">
        Frequently Asked Questions
      </h2>
      <div className="max-w-[51.875rem]">
        <FaqContentSmall className="xl:hidden" />
        <FaqContentLarge className="hidden xl:block" />
      </div>
    </div>
  );
};
export default FAQ;
