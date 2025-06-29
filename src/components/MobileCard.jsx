import illustration from "../assets/illustration.png";

const MobileCard = (props) => {
  return (
    <div
      className={`bg-default-blue mx-auto  w-full max-w-[26.6875rem]    rounded-2xl flex flex-col items-center justify-center gap-5 pt-[27px] pb-[33px] ${
        props.className ? props.className : ""
      }`}>
      <img
        src={illustration}
        alt="card illustration"
        className="w-full max-w-[149px]"
      />
      <h4 className="font-bold text-2xl text-white">
        Track your portfolio & taxes
      </h4>
      <p className="max-w-[359px] text-center text-[#F2F2F2] font-medium text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <button className="flex bg-white text-f-primary font-semibold text-sm gap-[6px] leading-7 py-[10px] px-[23.5px] items-center rounded-lg">
        Sign up at KoinX for free{" "}
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
  );
};
export default MobileCard;
