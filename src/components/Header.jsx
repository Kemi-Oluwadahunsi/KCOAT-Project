// <<<<<<< sayo
// import logo from '../assets/KCOAT.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import Button from './Button'
// =======
// import logo from "../assets/KCOAT.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// >>>>>>> main
// const Header = () => {
//   let Links = [
//     {name: "Featured",link:"/"},
//     {name: "Men",link:"/"},
//     {name: "Women",link:"/"},
//     {name: "Accessories",link:"/"},
//     {name: "Contact",link:"/"},
   
//   ];
//   return (
//     <>
// <<<<<<< sayo
      
//      <div className="p-3 md:flex  md:justify-between">
//         <div>
// =======
//       <div className="h-20 flex place-content-center justify-around items-center font-primary text-sm px-[4rem] bg-tertiary">
//         <div className="cursor-pointer">
// >>>>>>> main
//           <img src={logo} alt="logo" />
//         </div>
//         <ul className='flex p-0 justify-center items-start gap-x-8 flex-1'>
//           {
//             Links.map((link)=>(
//               <li key={link.name} className='mx-4 my-6 md:my-0'>
//                 <a href="{link.name}">{link.name}</a>
//                 {(link.name === "Men" || link.name === "Women" || link.name === "Accessories") && <FontAwesomeIcon icon={faChevronDown} className='ml-1' />}
//               </li>
//             ))
//           }
         
//         </ul>
//         <div>
//          <a href="/">Log In</a>
//           <Button href="/"></Button>
//         </div>
        

// <<<<<<< sayo
//        {/* <ul className="md:flex md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto  md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      
//           <li className="mx-4 my-6 md:my-0">Featured</li>
        
//           <div className='flex'>
//             <li className='mx-4 my-6 md:my-0'>Men</li>
//             <FontAwesomeIcon icon={faChevronDown} className='ml-1'/>
//           </div>

//           <div className='flex'>
//             <li className='mx-4 my-6 md:my-0'>Women</li>
//             <FontAwesomeIcon icon={faChevronDown} className='ml-1'/>
//           </div>
//           <div className='flex'>
//             <li className='mx-4 my-6 md:my-0'>Accessories</li>
//             <FontAwesomeIcon icon={faChevronDown}  className='ml-1'/>
// =======
//         <ul className="text-bland font-secondary font-medium flex justify-around space-x-4 w-2/4 place-items-center cursor-pointer">
//           <li>Featured</li>

//           <div className="flex gap-3 place-items-center">
//             <li>Men</li>
//             <FontAwesomeIcon icon={faChevronDown} />
//           </div>

//           <div className="flex gap-3 place-items-center">
//             <li>Women</li>
//             <FontAwesomeIcon icon={faChevronDown} />
//           </div>
//           <div className="flex gap-3 place-items-center">
//             <li>Accessories</li>
//             <FontAwesomeIcon icon={faChevronDown} />
// >>>>>>> main
//           </div>
//           <li className='mx-4 my-6 md:my-0'>Contact</li>
          
//         </ul>
// <<<<<<< sayo
//         <div className='space-x-4'>
//         <a href="#" className=''>Log In</a>
  
//         </div>
//   */}
// =======

//         <div className="flex gap-5 place-items-center cursor-pointer">
//           <div className="text-primary flex gap-2 place-items-center p-5">
//             <FontAwesomeIcon icon={faUser} />
//             <span className="font-bold">Login / Register</span>
//           </div>
//           <FontAwesomeIcon icon={faShoppingCart} color="white" className="text-xl"/>
//         </div>
// >>>>>>> main
//       </div>
  
      
//     </>
//   );
// };

// export default Header;
