import React from 'react';

//importation de l'image imegeAcceuil.jpeg
//import imageAcceuil from "../images/imageAcceuil.jpeg";

//impotation de bannerMont.jpeg
import bannerAbout from "../images/bannerMont.jpeg";

import bannerAcceuil from "../images/imageAcceuil.jpeg";

const Banner = () => {

    //récupération du de l'url de la page
    const currentURL = window.location.href;

    let bannerImg
    ///currentURL === "http://localhost:3002/" ? bannerImg= imageAcceuil : bannerImg= bannerMont;
    bannerImg = currentURL === "http://localhost:3002/" ?   bannerAcceuil : bannerAbout;

    return (
        < div className="Home__banner" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
       {/* bannerImg = currentURL === "http://localhost:3002/"  ?  <span>Chez vous,partout et ailleurs</span> : <span>Chez vous,<br></br> partout et ailleurs</span>*/}
       { bannerImg = currentURL === "http://localhost:3002/"  &&
        <p className='titleBanner'>
            <span className='titleBanner__up'>Chez vous,</span><span className='titleBanner__down'> partout et ailleurs</span>
            
        </p>
        }
    </div>
    );
};

export default Banner;