import logo from '../assets/KCOAT.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <ul>
          <li>Featured</li>
          <div>
            <li>Men</li>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <div>
            <li>Women</li>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div>
            <li>Accessories</li>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <li>Contact</li>
        </ul>

        
      </div>

      
    </>
  );
}

export default Header