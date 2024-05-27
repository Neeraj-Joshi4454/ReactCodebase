import { Link } from "react-router-dom";

const NavbarComp = () => {
    return (
        <>
           <nav className="w-[100vw] h-[10vh] bg-gray-800 text-white flex justify-center items-center">
                <ul className="h-[10vh] w-[50%] flex justify-center items-center gap-32">
                    <Link to="/" className="hover:bg-white hover:text-gray-800 p-2 rounded-md cursor-pointer">Home</Link>
                    <Link to="/movies" className="hover:bg-white hover:text-gray-800 p-2 rounded-md cursor-pointer">Movies</Link>
                    <Link to="/about" className="hover:bg-white hover:text-gray-800 p-2 rounded-md cursor-pointer">About</Link>
                    <Link to="/api" className="hover:bg-white hover:text-gray-800 p-2 rounded-md cursor-pointer">API</Link>
                    <Link to="/effect" className="hover:bg-white hover:text-gray-800 p-2 rounded-md cursor-pointer">Effect</Link>
                    <Link to="/forms" className="hover:bg-white hover:text-gray-800 p-2 rounded-md cursor-pointer">Forms</Link>
                </ul>
           </nav>
        </>
    );
}
export default NavbarComp;