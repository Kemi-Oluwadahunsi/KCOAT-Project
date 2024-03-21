

const Button = ({children}) => {
  return (
    <>
      <button className=" flex place-items-center gap-4 bg-tertiary text-primary rounded-xl px-5 py-2 cursor-pointer ">
        {children}
      </button>
    </>
  );
}

export default Button