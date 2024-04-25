import Cart from "/images/cart-plus-alt.svg"

const Cards = (props) => {

  return (
    <div>
      <div className="flex md:mx-4 justify-center flex-wrap">
        <div className="flex flex-col xs:gap-0 gap-[1em]  py-[1rem] rounded-md xs:w-full">
          <div className="mx-auto">
            <img src={props.image} alt={props.title} className="object-cover md:w-full" />
          </div>

          <div className="flex flex-col xs:gap-1 gap-3  px-1">
            <h3 className="font-oxygen font-normal overflow-hidden text-ellipsis line-clamp-1  xs:text-[.8rem] md:text-[0.9em] sm:text-base text-[1.1rem] text-secondary">
              {props.title}
            </h3>
            <div className="flex justify-between gap-3 ">
              <p className="font-tertiary font-normal xs:text-[0.8em] text-tertiary">
                N{props.price}
              </p>
              <div className="flex  gap-3 place-items-center cursor-pointer">
                <img src={Cart} alt="cart" className="xs:w-[60%]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;


