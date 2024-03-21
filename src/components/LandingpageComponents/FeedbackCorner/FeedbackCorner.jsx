import FeedbackCards from "./FeedbackCards"


const FeedbackCorner = () => {
  return (
    <div>
       <div className="text-color  text-center bg-primary">
       <h2 className=" font-tertiary font-bold text-2xl md:text-3xl lg:text-4xl mt-10 mb-1">Feedback Corner</h2>
        <p className="font-medium">What Our Customers Are Saying..........</p>
       </div>
       <div>
        <FeedbackCards/>
       </div>
    </div>
  )
}

export default FeedbackCorner