import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-white items-center justify-center flex font-bold shadow-lg">
            <p className="blue-gradient_text">PK</p>

        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="https://www.feedsreal.pro" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
                Blog
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
                Projects
            </NavLink>
            <NavLink to="/Contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar