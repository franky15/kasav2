import React from 'react';

//importation de l'image imegeAcceuil.jpeg
import imageAcceuil from "../images/imageAcceuil.jpeg";

//impotation de bannerMont.jpeg
import bannerMont from "../images/bannerMont.jpeg";

const Banner = () => {

    //récupération du de l'url de la page
    const currentURL = window.location.href;

    let bannerImg
    currentURL === "http://localhost:3002/" ? bannerImg= imageAcceuil : bannerImg= bannerMont;

    return (
        < div className="Home__banner" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
        <span>Chez vous, partout et ailleurs</span>
    </div>
    );
};

export default Banner;