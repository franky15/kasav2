import React from 'react';

//importation de l'image D_Footer
//import imgFooter from "../images/D_Footer.png";

import logoFooter from "../images/LOGOF.png";
import copiwrite from "../images/copiwrite.png";
import copiwriteM from "../images/copiwriteM.png";

const Footer = () => {
    return (
       
        <div className="Footer">

            <p className='logoFoot'>
                <img src={logoFooter} alt="logoFooter" />
            </p>
            
            
            {
            
             window.innerWidth < 768 ?

                <p className='logoFoot'> <img src={copiwriteM} alt="copiwriteM" /> </p>
                    :

                <p className='copi'> <img src={copiwrite} alt="logoFooter" />  </p>
               
          
        
            }
            
        </div>
    );
};

export default Footer;


/* <div className="Footer"  style={{ 
            
    backgroundImage: `url(${imgFooter})`,
    backgroundSize: "cover",
    backgroundPosition: "center"

    }}>*/