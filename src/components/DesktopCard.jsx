import illustration from "../assets/illustration.png";

const DesktopCard = (props) => {
  return (
    <div
      className={`bg-default-blue mx-auto w-full max-w-[26.6875rem] rounded-2xl py-10 px-4 sm:py-14 sm:px-8 ${
        props.className || ""
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Text */}
        <div className="flex flex-col items-center text-center gap-4">
          <h4 className="font-bold text-lg sm:text-xl text-white leading-snug">
            Get Started with KoinX
          </h4>
          <h4 className="font-bold text-lg sm:text-xl text-white leading-snug">
            for FREE
          </h4>
          <p className="text-[#F2F2F2] text-sm font-medium max-w-[20rem] leading-6">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>

        {/* Image */}
        <img
          src={illustration}
          alt="card illustration"
          className="w-[100px] sm:w-[149px] object-contain"
        />

        {/* Button */}
        <button className="flex items-center gap-2 bg-white text-f-primary font-semibold text-sm sm:text-base py-2.5 px-6 rounded-lg hover:shadow-md transition-all duration-200">
          Get Started for FREE
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
    </div>
  );
};

export default DesktopCard;
