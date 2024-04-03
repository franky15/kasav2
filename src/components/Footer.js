import React,{useEffect,useState} from 'react';

//importation de l'image D_Footer
//import imgFooter from "../images/D_Footer.png";

import logoFooter from "../images/LOGOF.png";
import copiwrite from "../images/copiwrite.png";
import copiwriteM from "../images/copiwriteM.png";



const Footer = () => {

    //gestion du state de la largeur de la fenêtre
    const [width, setWidth] = useState(null);

   

    useEffect(() => {

       /* const windowWidth = parseInt(window.innerWidth);

        setWidth(windowWidth);*/

        // Fonction de mise à jour de la largeur de la fenêtre
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Ajout de l'écouteur d'événements pour suivre les changements de taille de la fenêtre
        window.addEventListener('resize', handleResize);

        // Suppression de l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
       
        <div className="Footer">

            <p className='logoFoot logoFooter'>
                <img src={logoFooter} alt="logoFooter" />
            </p>
            
            
            {
            
            width > 768 &&

               

                <p className='copi'> <img src={copiwrite} alt="logoFooter" />  </p>
     
            }
            {
            
            width < 768 &&

                <p className='logoFoot copie'> <img src={copiwriteM} alt="copiwriteM" /> </p>
      
            }
            
            

            
            
        </div>
    );
};

export default Footer;

