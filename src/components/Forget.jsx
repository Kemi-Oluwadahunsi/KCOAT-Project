import Button from "./Button";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-[7rem] pb-[3em] flex justify-center border-l-8 border-simple1 h-screen">
      <div className="h-full bg-white border border-solid border-border rounded-md shadow-lg px-[2rem] pt-[4rem] flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-[5em]">
          <h2 className=" text-tertiary3 text-3xl font-lso flex justify-center">
            Forget Password
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[5rem]">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className=" font-oxygen text-tertiary3 font-medium"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" gap-4 p-4 border rounded-full border-solid border-opacity-50 border-createaccount w-[32.3rem] h-[3.15rem] text-createaccount"
              />
            </div>

            <div className="flex items-center justify-center">
            <div className=" flex justify-center mt-[2em] hover:scale-105 w-[19rem] bg-tertiary rounded-xl">
              <Button
                type="submit"
                className={`border-3 bg-simple1 text-tertiary2 font-oxygen flex items-center justify-center py-1 text-xl`}
              >
                Send Link
              </Button>
            </div>
          </div>
          </form>
        </div>
        <p className="text-sm text-tertiary4 flex justify-center gap-2 ">
          Don&apos;t receive the link?
          <a
            href="#"
            className="font-oxygen text-simple1  hover:scale-105 underline underline-offset-4 decoration-tertiary"
          >
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
