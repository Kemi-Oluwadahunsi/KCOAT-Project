
const Button = ({children, className}) => {
  return (
    <>

    <div className={` ${className}`}>
      <button className=" flex place-items-center gap-4 bg-tertiary text-primary rounded-xl px-4 py-2 cursor-pointer border-0">
        {children}
      </button>
    </div>
      
    </>
  );
}

export default Button;