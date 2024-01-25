import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-20 h-9 rounded-tl-lg rounded-br-lg bg-white items-center justify-center flex font-bold shadow-lg">
        <p className="blue-gradient_text ">Partha</p>
      </NavLink>
      <nav className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-xl gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 font-medium">
        <NavLink to="https://www.feedsreal.pro" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
          Blog
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
          Projects
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
