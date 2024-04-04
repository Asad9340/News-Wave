import { Button } from '@material-tailwind/react';
import { FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Firebase/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

function RightSection() {
  const { googleSignIn, setUser } = useContext(AuthContext);
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => console.log(error));
    toast.success('LogIn Successfully.', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  };
  return (
    <div>
      <h2>Login With</h2>
      <div className="flex gap-2 flex-col mt-4">
        <Button
          onClick={handleGoogleLogIn}
          size="sm"
          variant="outlined"
          color="blue"
          className="flex items-center gap-2 w-3/4 "
        >
          <FaGoogle />
          Login with Google
        </Button>
        <Button
          size="sm"
          variant="outlined"
          color="black"
          className="flex items-center gap-2 w-3/4"
        >
          <FaGithub />
          Login with Github
        </Button>
      </div>
      <div className="mt-4">
        <h2 className="text-base font-semibold text-[#403F3F]">Find Us On</h2>
        <div className="flex gap-2 items-center p-4 border rounded-t-lg mt-3">
          <FaFacebook className="text-blue-600" />
          <p className="text-sm text-[#706F6F] font-medium ">Facebook</p>
        </div>
        <div className="flex gap-2 items-center p-4 border-x">
          <FaTwitter className="text-[#58A7DE] " />
          <p className="text-sm text-[#706F6F] font-medium ">Twitter</p>
        </div>
        <div className="flex gap-2 items-center p-4 border rounded-b-lg">
          <FaInstagram className="text-[#D82D7E]" />
          <p className="text-sm text-[#706F6F] font-medium ">Instagram</p>
        </div>
      </div>
      <h2 className="text-base font-semibold text-[#403F3F]">Q Zone</h2>
      <div>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default RightSection;
