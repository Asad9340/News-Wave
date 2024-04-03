import Logo from '../assets/logo.png'
function TopBar() {
  return (
    <div className='text-center my-6 md:my-12'>
      <img className='mx-auto' src={Logo} alt="" />
      <h3 className="text-lg text-[#706F6F] mt-4 mb-2">
        Journalism Without Fear or Favour
      </h3>
      <p className="text-xl text-[#403F3F] font-medium">Sunday, November 27, 2022</p>
    </div>
  );
}

export default TopBar