import { Button } from '@material-tailwind/react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
function RightSection() {
  return (
    <div>
      <h2>Login With</h2>
      <div className="flex gap-2 flex-col mt-4">
        <Button
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
    </div>
  );
}

export default RightSection;
