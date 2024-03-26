import React from "react";
import { Link } from "react-router-dom";

//importation de l'image 404
import img404 from "../images/404.png"; 

const Error = () => {
  return (
    <div className="Error">

      <p className="Error__404">
        <img src={img404} alt="404" />
      </p>
      <p className="Error__message">Ousp! La page que vous demandez n'existe pas.</p>
      <span className="Error__link">
        <Link to="/">Retourner sur la page d'acceuil</Link>
      </span>
    </div>
  );
};

export default Error;
