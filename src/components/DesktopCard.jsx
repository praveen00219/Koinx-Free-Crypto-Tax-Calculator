import illustration from "../assets/illustration.png";

const DesktopCard = (props) => {
  return (
    <div
      className={` bg-default-blue mx-auto  w-full max-w-[26.6875rem]    rounded-2xl   py-[55px] ${
        props.className ? props.className : ""
      }`}>
      <div className="flex flex-col gap-[45px] items-center justify-center">
        {/* text */}
        <div className="flex flex-col items-center justify-center gap-5">
          <div>
            <h4 className="font-bold text-2xl text-white leading-10">
              Get Started with KoinX
            </h4>
            <h4 className="font-bold text-2xl text-white text-center leading-10">
              for FREE
            </h4>
          </div>
          <p className="max-w-[359px] text-center text-[#F2F2F2] font-medium text-sm leading-6">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        {/* image & button */}

        <img
          src={illustration}
          alt="card illustration"
          className="w-full max-w-[149px]"
        />

        <button className="flex bg-white text-f-primary font-semibold text-base gap-[6px] leading-7 py-[10px] px-[23.5px] items-center rounded-lg">
          Get Started for FREE
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
export default DesktopCard;
