

const FeedbackCards = (props) => {

  return (
   <div className="flex justify-center items-center">
     <div className="  bg-primary hover:bg-tertiary text-color sm:w-[90%] md:w-[80%] lg:w-[80%]  sm:h-[13rem] h-[16rem] md:py-1 md:p-5 sm:p-4 xs:p-8 lg:p-8 flex flex-col md:gap-9 sm:gap-4 xs:gap-2 lg:gap-10 ">
        <div>
        <img src={props.image} alt={props.image} />
        </div>
        <h5 className=" font-bold font-tertiary">{props.name}</h5>
        <p className="font-medium">{props.feedback}</p>
    </div>
   </div>
  )
}


export default FeedbackCards