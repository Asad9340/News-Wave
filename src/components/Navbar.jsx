import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { Button } from '@material-tailwind/react';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

function Navbar() {
  const { user } = useContext(AuthContext);
  const { photoURL } = user;
  return (
    <div className="grid gap-4 grid-cols-3 my-6 mx-4 items-center">
      <div></div>
      <div className="flex gap-4 lg:gap-6 justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'border border-red-500 px-3 rounded-md' : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'border border-red-500 px-3 rounded-md' : ''
          }
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive ? 'border border-red-500 px-3 rounded-md' : ''
          }
        >
          Career
        </NavLink>
      </div>
      <div className=" flex items-center gap-3 justify-end">
        {user ? (
          <img className='w-10 rounded-full' src={photoURL} alt="" />
        ) : (
          <CgProfile className="text-4xl" />
        )}
        {user ? (
          <Link to="/login">
            <Button size="md">LogOut</Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button size="md">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
