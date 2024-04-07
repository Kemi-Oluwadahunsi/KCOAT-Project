

const Input = ({ type, className, placeholder }) => {
  return (
    <div className={` ${className}`}>
      <input type={type} placeholder={placeholder} className="outline-none border w-full border-categoryborder2 p-4
      rounded-xl"/>
      
    </div>
  );
};

export default Input;