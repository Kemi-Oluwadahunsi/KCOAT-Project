import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const FeedbackCards = (props) => {

  return (
   <div className="flex justify-center items-center">
     <div className="  bg-primary hover:bg-tertiary hover:text-primary text-color sm:w-[90%] md:w-[80%] lg:w-[80%]  sm:h-[13rem] h-[16rem] md:py-1 md:p-5 sm:p-4 xs:p-8 lg:p-8 flex flex-col md:gap-9 sm:gap-4 xs:gap-4 lg:gap-5 ">
        <div>
        <FontAwesomeIcon icon={faQuoteLeft}  className="text-3xl md:text-2xl sm:text-2xl xs:text-xl md:mb-5 sm:mb-3 xs:mb-2 md:mt-5 sm:mt-3 xs:mt-2"/>
        </div>
        <h5 className=" font-bold font-secondary">{props.name}</h5>
        <p className="font-medium">{props.feedback}</p>
    </div>
   </div>
  )
}


export default FeedbackCards