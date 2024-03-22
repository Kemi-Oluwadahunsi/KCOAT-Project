

const Button = ({children}) => {
  return (
    <>
      <button className=" flex place-items-center gap-4 bg-tertiary text-primary rounded-xl px-4 py-2 cursor-pointer hover:scale-110">
        {children}
      </button>
    </>
  );
}

export default Button