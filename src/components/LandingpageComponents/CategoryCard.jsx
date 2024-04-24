import img1 from "../../assets/p-necklace.png";
import img2 from "../../assets/bbb.png";
import img3 from "../../assets/orangefit.png";
import img4 from "../../assets/faceless.png";

const CategoryCard = () => {
  return (
    <section className="hidden md:block lg:block">
      <div className="bg-tertiary2 flex flex-col justify-center gap-10 pt-5">
        <div className="flex gap-8 text-center rounded-xl border border-simple1 border-opacity-25 py-2 lg:block mx-[10rem]">
          <h2 className="text-tertiary1 font-lso text-4xl ">
            View Our Range Of Categories
          </h2>
          <p className="font-montserrat text-[1.25em]">
            Find everything you need here today
          </p>
        </div>

        <div className="flex justify-around md:px-[4rem] px-[10rem] gap-10 md:h-[20rem]">
          {/* Card with img3 */}
          <div
            className="relative w-[33%]   h-auto ml-0 my-4 bg-cover bg-no-repeat bg-center rounded-md overflow-hidden "
            style={{ backgroundImage: `url(${img3})` }}
          >
            <a href="#">
              <button className="absolute bottom-4 ml-48 md:ml-32 bg-primary hover:bg-color text-tertiary font-lso py-2 px-2 rounded">
                Female wears
              </button>
            </a>
          </div>

          {/* Card with img1 and img2 */}
          <div className="flex flex-col justify-center w-[33%]">
            {/* img1 */}
            <div
              className="relative  h-48 mx-4 my-4 bg-cover bg-no-repeat bg-center rounded-md overflow-hidden"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <a href="#">
                <button className="absolute bottom-1 mx-3 bg-primary hover:bg-color text-tertiary font-lso py-2 px-2 rounded">
                  Jewelries
                </button>
              </a>
            </div>

            {/* img2 */}
            <div
              className="relative h-48 mx-4 my-4 bg-cover bg-no-repeat bg-center rounded-md overflow-hidden"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <a href="#">
                <button className="absolute bottom-3 ml-48 md:ml-28 bg-primary hover:bg-color text-tertiary font-lso py-2 px-2 rounded">
                  Shoes & Bags
                </button>
              </a>
            </div>
          </div>

          {/* Card with img4 */}
          <div
            className="relative w-[33%] h-auto my-4 bg-cover bg-no-repeat bg-center rounded-md overflow-hidden"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <a href="#">
              <button className="absolute bottom-4 ml-48 md:ml-32 bg-primary hover:bg-color text-tertiary font-lso py-2 px-2 rounded">
                Men Wears
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
