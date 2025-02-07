import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="border-2 border-[#23BE0A] text-gray-400 bg-white">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks" className="border-2 border-[#23BE0A] text-gray-400 bg-white">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pages" className="border-2 border-[#23BE0A] text-gray-400 bg-white">Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" id="logoText" className="btn btn-ghost text-[28px] font-bold">Boi Poka</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-2">{links}</ul>
      </div>
      <div className="navbar-end flex ml-auto gap-x-2">
        
          <NavLink to="" className="btn px-6 text-white bg-[#23BE0A]">
            Sign In
          </NavLink>
       
        
          <NavLink to="/dashboard" className="btn px-6 text-white bg-[#59C6D2]">
            Sign Up
          </NavLink>
        
      </div>
    </div>
  );
};

export default Navbar;
