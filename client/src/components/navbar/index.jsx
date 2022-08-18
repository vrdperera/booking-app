import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="Navbar-Wrapper h-[50px] bg-navbar-darkBlue  flex justify-center">
      <div className="container mx-auto">
        <div className="navbarContainer h-full container max-w-7xl mx-auto text-white flex items-center justify-between">
          <span className="navbarWordmark font-semibold text-3xl">
            <Link to="/">Booking BB</Link>
          </span>
          <div className="navLoginRegisterBtns flex gap-3">
            <button className="signup bg-white w-24 text-black px-4 py-2 rounded-sm font-medium text-xs leading-tight uppercase hover:shadow-md">
              Sign up
            </button>
            <button className="login  bg-white w-24  text-black px-4 py-2 rounded-sm font-medium text-xs leading-tight uppercase  hover:shadow-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
