import Cart from "/images/cart-plus-alt.svg";

const CardNew = (props) => {
  return (
    <div>
      <div className="flex md:mx-4 xs:px-8 justify-center flex-wrap">
        <div className="flex flex-col gap-[1em] mx-auto py-[1rem] rounded-md xs:w-[90%]">
          <div className="mx-auto">
            <img
              src={props.image}
              alt={props.title}
              className="object-cover xs:rounded-[1.5rem] xs:w-[80%] mx-auto"
            />
          </div>

          <div className="flex flex-col gap-3 mx-auto px-1 xs:w-[80%]">
            <h3 className="font-oxygen font-normal xs:text-[.9rem] md:text-[0.9em] sm:text-base text-[1.1rem] text-secondary">
              {props.title}
            </h3>
            <div className="flex justify-between gap-3 ">
              <p className="font-tertiary font-normal text-[1rem] text-tertiary">
                N{props.price}
              </p>
              <div className="flex gap-3 place-items-center cursor-pointer">
                <img src={Cart} alt="cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNew;
