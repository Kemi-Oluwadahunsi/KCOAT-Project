import React from 'react';
import sideImage from '../assets/Resetpw.jpg';

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex p-[10rem]">
      <div className="w-1/2 ml-16">
        <img src={sideImage} alt="Reset Password" className="w-[619px] h-[616px]" />
      </div>
      <div className="w-1/2 w-[619px] h-[616px] border border-solid border-border rounded-l-md -mx-[4rem]">
        <div className='pl-[2.5rem]'>
        <h2 className="text-2xl mb-4 text-tertiary3 text-3xl font-lso mt-4 mb-4">Reset Your Password</h2>
        <p className='mb-4 text-createaccount'>The verification email will be sent to the mail box.<br/><span>Please check it.</span></p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 pl-[2.5rem]">
            <label htmlFor="newPassword" className="block mb-2 font-oxygen text-tertiary3 text-base">Enter New Password</label>
            <input type="password" id="newPassword" name="newPassword" className="gap-4 p-4 border rounded-full border-solid border-opacity-50 border-createaccount w-[32.3rem] h-[3.15rem]" />
          </div>
          <div className="mb-4 pl-[2.5rem]">
            <label htmlFor="confirmPassword" className="block mb-2 font-oxygen text-tertiary3 text-base">Confirm New Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="gap-4 p-4 border rounded-full border-solid border-opacity-50 border-createaccount w-[32.3rem] h-[3.15rem]" />
          </div>
          <div className='mb-4 pl-[2.5rem] flex justify-center p-14 sm:p-20'>
          <button type="submit" className="border-3 bg-simple1 text-tertiary2 font-oxygen text-base  rounded-xl w-[19.5rem] h-[3rem] hover:scale-90">Send</button>
          </div>
          </form>
          <p className='mt-4 text-sm font-oxygen text-tertiary4 pl-[2.5rem]'><a href="">Back to login</a></p>
      </div>
    </div>   
  );
};

export default ResetPassword;