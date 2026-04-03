import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, login} from "../slice/loginSlice";

//import login store 
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleLogin = () => {
    const dummyUser = { name: "John Doe", email: "john.doe@example.com" };
    dispatch(login(dummyUser));
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold">ChatApp</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:text-gray-200">Chats</button>
          <button className="hover:text-gray-200">Profile</button>
          {isLoggedIn && (
            <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600" onClick={handleLogout}>
              Logout
            </button>
          )}
          {!isLoggedIn && (
            <button className="bg-green-500 px-3 py-1 rounded hover:bg-green-600" onClick={handleLogin}>
              Login
            </button>
          ) }
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3">

          <button className="text-left">Chats</button>

          <button className="text-left">Profile</button>
 {isLoggedIn && (
            <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600" onClick={handleLogout}>
              Logout
            </button>
          )}
          {!isLoggedIn && (
            <button className="bg-green-500 px-3 py-1 rounded hover:bg-green-600" onClick={handleLogin}>
              Login
            </button>
          ) }

        </div>
      )}

    </nav>
  );
}

export default Navbar;