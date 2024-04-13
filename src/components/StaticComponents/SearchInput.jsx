import outline from "../../assets/search-outline.svg";


const SearchInput = () => {
  return (
    <div>
      <div className=" ">
        <div className=" border border-tertiary px-7 py-2  bg-primary rounded-[2.5rem]">
          <div className="flex items-center justify-between ">
            <input
              type="search"
              placeholder="Search"
              className=" bg-transparent w-[90%] outline-none"
            />
            <img src={outline} alt="outline" />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SearchInput;
