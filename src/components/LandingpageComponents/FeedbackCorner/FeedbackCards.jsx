

const FeedbackCards = (props) => {

  return (
   <div className="flex justify-center items-center">
     <div className="  bg-primary hover:bg-tertiary text-color w-[80%] h-[16rem] p-8 flex flex-col  gap-10 rounded">
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