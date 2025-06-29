import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full  bg-white text-f-primary drop-shadow">
      <div className="w-[90%] max-w-[83rem] mx-auto  flex justify-between items-center py-4">
        <img src={logo} alt="KoinX" className="w-20  lg:w-[94px] " />
        {/* large screens */}
        <nav className="hidden  text-f-primary text-base font-semibold lg:flex items-center gap-[69px]">
          <ul className=" flex items-center gap-8">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Exchanges</a>
            </li>
            <li>
              <a href="#">How it Works?</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
          <a
            href="#"
            className="text-default-blue border-[1px] border-default-blue px-[30px] py-[10.5px] rounded">
            Sign in
          </a>
        </nav>
        {/* small screens */}
        <nav className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
