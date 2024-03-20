

const Button = ({children}) => {
  return (
    <>
      <button className="bg-tertiary text-primary rounded-xl px-5 py-2 cursor-pointer ">
        {children}
      </button>
    </>
  );
}

export default Button