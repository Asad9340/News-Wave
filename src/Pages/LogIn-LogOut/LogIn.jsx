import { Button, Input } from '@material-tailwind/react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';

function LogIn() {
  const { logInUser } = useContext(AuthContext);
  const handleLogInSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password);
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded-lg mx-auto shadow-xl">
          <form onSubmit={handleLogInSubmit}>
            <div className="mb-6">
              <Input
                variant="outlined"
                label="Email"
                size="lg"
                placeholder="asad@gmail.com"
                type="email"
                name="email"
                id="email"
                className="text-2xl"
              />
            </div>
            <div>
              <Input
                variant="outlined"
                label="Password"
                size="lg"
                placeholder="******"
                type="password"
                name="password"
                id="password"
                className="text-2xl"
              />
              <a
                href="#"
                className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600"
              >
                Forget Password?
              </a>
            </div>
            <Button type="submit" className="w-full mt-3 cursor-pointer">
              Login
            </Button>
          </form>
          <p className="mt-2">
            New Here? Please{' '}
            <Link className="font-semibold underline" to="/register">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
