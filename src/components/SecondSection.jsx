import Featmale from "../assets/featured-male.png";
import Featfemale from "../assets/featured-female.png";
import Feataccess from "../assets/featured-access.png";
import Featshoes from "../assets/featured-shoes.png";
const SecondSection = () => {
  return (
    <>
      <section className="flex flex-col gap-14 h-[49rem] pt-[3em] px-[10rem]">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-tertiary font-secondary text-[3rem] font-bold">
            View Our Range Of Categories
          </h2>
          <p className="text-tertiary font-secondary text-[1.7rem] font-normal">
            Find everything you need here today
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="relative">
              <img src={Feataccess} alt="accessories" />
              <div className="py-2 px-3 absolute top-[11em] left-10 bg-primary rounded-sm font-secondary font-bold text-base text-tertiary cursor-pointer">
                Accessories
              </div>
            </div>
            <div className="relative">
              <img src={Featshoes} alt="shoes" />
              <div className="py-2 px-10 absolute top-[11em] left-10 bg-primary rounded-sm font-secondary font-bold text-base text-tertiary cursor-pointer">
                Shoes
              </div>
            </div>
          </div>

          <div className="relative">
            <img src={Featfemale} alt="female-wears" />
            <div className=" py-3 px-5 absolute top-[28em] left-[6em] bg-primary rounded-sm font-secondary font-bold text-base text-tertiary cursor-pointer">
              Female Outfits
            </div>
          </div>

          <div className="relative">
            <img src={Featmale} alt="male-wears" />
            <div className="py-3 px-5 absolute top-[28em] left-[6em] bg-primary rounded-sm text-center font-secondary font-bold text-base text-tertiary cursor-pointer">
              Male Outfits
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
