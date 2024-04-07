import Cart from "/images/cart-plus-alt.svg"

const Cards = (props) => {
  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <div className="flex flex-col gap-[1em]  py-[1rem] rounded-md">
          <div className="mx-auto">
            <img src={props.image} alt={props.title} className="object-cover" />
          </div>

          <div className="flex flex-col gap-3  px-1">
            <h3 className="font-oxygen font-normal text-[1.1rem] text-secondary">
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

export default Cards;
