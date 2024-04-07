import React from 'react';

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className='pt-[10rem] flex justify-center'>
    <div className="w-[619px] h-[616px] bg-white border border-solid border-border rounded-md shadow-lg">
      <h2 className="text-2xl mb-4 text-tertiary3 text-3xl font-lso mt-4 mb-[8rem] flex justify-center">Forget Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mb-6">
        <label htmlFor="email" className="ml-14 mb-2 font-oxygen text-tertiary3 text-base">Enter Your Email</label>
        <input type="email" id="email" name="email" className="ml-14 mb-14 gap-4 p-4 border rounded-full border-solid border-opacity-50 border-createaccount w-[32.3rem] h-[3.15rem] text-createaccount"/>
       <div className='flex justify-center'> 
        <button type="submit" className="border-3 bg-simple1 text-tertiary2 font-oxygen text-base  rounded-xl w-[19.5rem] h-[3rem] hover:scale-90">Send Link</button>
       </div>
      </form>
      <p className="text-sm text-tertiary4 mb-4 flex justify-center">Don't receive the link?<a href="#" className='font-oxygen text-simple1  hover:scale-90'>Resend</a></p>
    </div>
    </div>
  ); 
};

export default ForgotPassword;