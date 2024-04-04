import { Button, Input } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';

function Register() {
  const { createUser } = useContext(AuthContext);
  const handleRegisterSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      createUser(email, password)
        .then(result => console.log(result.user))
        .catch(err => console.log(err.message));
    };
  return (
    <div>
      <>
        <Navbar />
        <div>
          <div className="max-w-xl py-6 px-8  mt-10 bg-white rounded-lg mx-auto shadow-xl">
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-base text-[#403F3F] font-semibold mb-2 pl-1 "
                >
                  Your Name
                </label>
                <Input
                  variant="outlined"
                  label="Name"
                  size="lg"
                  placeholder="Md Asadul Islam"
                  type="name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="photo"
                  className="text-base text-[#403F3F] font-semibold mb-2 pl-1 "
                >
                  Photo URL
                </label>
                <Input
                  variant="outlined"
                  label="Photo url"
                  size="lg"
                  placeholder="asad@gmail.com"
                  type="photo"
                  name="photo"
                  id="photo"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-base text-[#403F3F] font-semibold mb-2 pl-1 "
                >
                  Email address
                </label>
                <Input
                  variant="outlined"
                  label="Email"
                  size="lg"
                  placeholder="asad@gmail.com"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-base text-[#403F3F] font-semibold mb-2 pl-1 "
                >
                  Password
                </label>
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
              </div>
              <Button type="submit" className="w-full mt-3 cursor-pointer">
                Login
              </Button>
            </form>
            <p className="mt-2">
              Already Have Account{' '}
              <Link className="font-semibold underline" to="/login">
                LogIn Now
              </Link>
            </p>
          </div>
        </div>
      </>
    </div>
  );
}

export default Register;
