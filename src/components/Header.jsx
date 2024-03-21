import logo from '../assets/KCOAT.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
const Header = () => {
  let Links = [
    {name: "Featured",link:"/"},
    {name: "Men",link:"/"},
    {name: "Women",link:"/"},
    {name: "Accessories",link:"/"},
    {name: "Contact",link:"/"},
   
  ];
  return (
    <>
      
     <div className="p-3 md:flex  md:justify-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className='flex p-0 justify-center items-start gap-x-8 flex-1'>
          {
            Links.map((link)=>(
              <li key={link.name} className='mx-4 my-6 md:my-0'>
                <a href="{link.name}">{link.name}</a>
                {(link.name === "Men" || link.name === "Women" || link.name === "Accessories") && <FontAwesomeIcon icon={faChevronDown} className='ml-1' />}
              </li>
            ))
          }
         
        </ul>
        <div>
         <a href="/">Log In</a>
          <Button href="/"></Button>
        </div>
        

       {/* <ul className="md:flex md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto  md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      
          <li className="mx-4 my-6 md:my-0">Featured</li>
        
          <div className='flex'>
            <li className='mx-4 my-6 md:my-0'>Men</li>
            <FontAwesomeIcon icon={faChevronDown} className='ml-1'/>
          </div>

          <div className='flex'>
            <li className='mx-4 my-6 md:my-0'>Women</li>
            <FontAwesomeIcon icon={faChevronDown} className='ml-1'/>
          </div>
          <div className='flex'>
            <li className='mx-4 my-6 md:my-0'>Accessories</li>
            <FontAwesomeIcon icon={faChevronDown}  className='ml-1'/>
          </div>
          <li className='mx-4 my-6 md:my-0'>Contact</li>
          
        </ul>
        <div className='space-x-4'>
        <a href="#" className=''>Log In</a>
  
        </div>
  */}
      </div>
  
      
    </>
  );
}

export default Header