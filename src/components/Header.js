import React,{useState} from "react";

//importation de l'image logo.png
import imgLogo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {

  const [isOpen, setIsOpen] = useState({
    
    isOpenAcceuil: false,
    isOpenAbout: false,
  
  });

  return (
    <nav>
      <ul className="Header">
        <li className="logo">
        <Link to="/"><img src={imgLogo} alt="logo" /></Link>
          
        </li>

        <div className="Header__menu">
          {
           isOpen.isOpenAcceuil ? <li className="itemHome borderBottomCustom" onClick={()=> setIsOpen({
            
            ...isOpen,
            isOpenAcceuil: false,
            isOpenAbout: false,
           
          }) } >
              <Link to="/">Accueil</Link>
          </li>
                  :
           <li className="itemHome" onClick={()=> setIsOpen({
            
            ...isOpen,
            isOpenAcceuil: true,
            isOpenAbout: false,
           
          }) }>
            <Link to="/">Accueil</Link>
          </li>
          }


          {
            isOpen.isOpenAbout ? <li className="itemAbout borderBottomCustom"  onClick={()=> setIsOpen({
            
              ...isOpen,
              isOpenAcceuil: false,
              isOpenAbout: false,
             
            }) }>

             <Link to="/about" >A propos</Link> 
              
            </li>
                  :
             <li className="itemAbout"  onClick={()=> setIsOpen({
      
              ...isOpen,
              isOpenAcceuil: false,
              isOpenAbout: true,
              
            }) }>

              <Link to="/about" >A propos</Link> 
              
            </li>
            
            
          }
        </div>

      </ul>
    </nav>
  );
};

export default Header;
