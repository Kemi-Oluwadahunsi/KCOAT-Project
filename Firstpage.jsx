import { Outlet } from "react-router-dom"
import Header from "./src/components/Header"


const Firstpage = () => {
  return (
    <>
    <Header />
    <Outlet/>
    
    </>
  )
}

export default Firstpage