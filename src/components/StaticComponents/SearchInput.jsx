import outline from "../../assets/search-outline.svg";


const SearchInput = ({onChange}) => {

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <div className=" ">
        <div className=" border border-tertiary px-7 py-2  bg-primary rounded-[2.5rem]">
          <div className="flex items-center justify-between ">
            <input
              type="search"
              placeholder="Search"
              className=" bg-transparent w-[90%] outline-none"
              onChange={handleInputChange}
            />
            <button type="submit" >
              <img src={outline} alt="outline" className="cursor-pointer" />
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
