import illustration from "../assets/illustration.png";

const MobileCard = (props) => {
  return (
    <div
      className={`bg-default-blue mx-auto w-full rounded-2xl flex flex-col items-center justify-center gap-6 pt-8 pb-10 px-4 sm:px-6 ${
        props.className || ""
      }`}
    >
      <img
        src={illustration}
        alt="card illustration"
        className="w-24 sm:w-36 object-contain"
      />

      <h4 className="font-bold text-xl sm:text-2xl text-white text-center leading-snug">
        Track your portfolio & taxes
      </h4>

      <p className="text-[#F2F2F2] text-sm sm:text-base text-center font-medium leading-6 max-w-xs sm:max-w-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <button className="flex items-center justify-center gap-2 bg-white text-f-primary font-semibold text-sm sm:text-base py-2.5 px-6 rounded-lg hover:shadow-md transition-all duration-200">
        Sign up at KoinX for free
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileCard;
