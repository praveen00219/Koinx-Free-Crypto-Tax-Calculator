import notifyImg from "../assets/notify.png";

const Newsletter = (props) => {
  //   return (
  //     <div
  //       className={`bg-default-blue mx-auto w-full rounded-2xl flex flex-row items-center justify-evenly gap-6 pt-8 pb-10 px-4 sm:px-6 ${
  //         props.className || ""
  //       }`}
  //     >
  //       <img
  //         src={notifyImg}
  //         alt="card notifyImg"
  //         className="w-24 sm:w-36 object-contain"
  //       />

  //       <div>
  //         <h4 className="font-bold text-xl sm:text-2xl text-white text-left leading-snug">
  //           Stay up to date with latest crypto news end events. Subscribe to our
  //           Newsletter
  //         </h4>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="hidden xl:flex w-full max-w-5xl mx-auto bg-[#0070F3] rounded-xl p-8 flex-row items-center justify-evenly gap-4 text-white">
      {/* Left: Image */}

      <img
        src={notifyImg}
        alt="Newsletter Illustration"
        className="w-30 object-contain"
      />

      {/* Right: Email input + Button */}
      <div className="">
        <p className="text-xl font-semibold max-w-md mb-3">
          Stay up to date with latest crypto news and events. Subscribe to our
          newsletter
        </p>
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-grow px-3 py-2 rounded-l-md text-black text-sm outline-none"
        />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
