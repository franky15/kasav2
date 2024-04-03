import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';


import Colapse from '../components/Colapse';

const Accordions = ({id}) => {

  
    //gestion des states des flêches
    let [arrow, setArrow] = useState({

        isOpenFiabilite: true,
        isOpenRespect: true,
        isOpenService: true,
        isOpenSecurite: true,
    });

    //réccupération de l'url
    let location = useLocation();
    const currentUrl = location.pathname;


    return (

        <div  className='BtnColapse'>
           
           <>
           { currentUrl === "/about" 
              ?

              <>
            <button className='containerDescriptionEquipe'
                onClick={ ()=> setArrow({...arrow, isOpenFiabilite: !arrow.isOpenFiabilite, }) }>

                <div className="containerDescriptionEquipe__item arrowDescription">
                    
                    
                    <p className='btnArrow'>Fiabilité</p>

                    
                    {   
                        arrow.isOpenFiabilite ?
                        <span><i className="fa-solid fa-chevron-up"></i></span>

                        :
                        <span><i className="fa-solid fa-chevron-down"></i></span>
                    
                    }
                    
                </div>

                { !arrow.isOpenFiabilite &&
                 <p className='valueDescription contentValue'>
                    
                    Les annonces postées sur Kasa garantissent une
                    fiabilité totale. Les photos sont conformes aux
                    logements, et toutes les informations sont
                    régulièrement vérifiées par nos équipes.
                   
                </p>
                
                }

            </button>

            <button className='containerDescriptionEquipe'
                onClick={ ()=> setArrow({...arrow, isOpenRespect: !arrow.isOpenRespect }) }>

                <div className="containerDescriptionEquipe__item arrowDescription">
                    
                    
                    <p className='btnArrow'>Respect</p>

                    
                    {   
                        arrow.isOpenRespect ?
                        <span><i className="fa-solid fa-chevron-up"></i></span>

                        :
                        <span><i className="fa-solid fa-chevron-down"></i></span>
                    
                    }
                    
                </div>

                { !arrow.isOpenRespect && 
                <p className='valueDescription contentValue'>
                    La bienveillance fait partie des valeurs
                    fondatrices de Kasa. Tout comportement
                    discriminatoire ou de perturbation du voisinage
                    entrainera une exclusion de notre plateforme.
                </p>
                
                }

            </button>

            <button className='containerDescriptionEquipe'
                onClick={ ()=> setArrow({...arrow, isOpenService: !arrow.isOpenService, }) }>

                <div className="containerDescriptionEquipe__item arrowDescription">
                    
                    
                    <p className='btnArrow'>Service</p>

                    
                    {   
                        arrow.isOpenService ?
                        <span><i className={`fa-solid fa-chevron-up`}></i></span>

                        :
                        <span><i className={`fa-solid fa-chevron-down`}></i></span>
                    
                    }
                    
                </div>

                { !arrow.isOpenService && 
                <p className='valueDescription contentValue'>
                    La bienveillance fait partie des valeurs
                    fondatrices de Kasa. Tout comportement
                    discriminatoire ou de perturbation du voisinage
                    entrainera une exclusion de notre plateforme.
                </p>
                
                }

            </button>

            <button className='containerDescriptionEquipe'
                onClick={ ()=> setArrow({...arrow, isOpenSecurite: !arrow.isOpenSecurite, }) }>

                <div className="containerDescriptionEquipe__item arrowDescription">
                    
                    
                    <p className='btnArrow'>Sécurité</p>

                    
                    {   
                        arrow.isOpenSecurite ?
                        <span><i className={`fa-solid fa-chevron-up`}></i></span>

                        :
                        <span><i className={`fa-solid fa-chevron-down`}></i></span>
                    
                    }
                    
                </div>

                { !arrow.isOpenSecurite &&
                 <p className='valueDescription contentValue'>
                    La sécurité est la priorité de Kasa. Aussi bien pour
                    nos hôtes que pour les voyageurs, chaque
                    logement correspond aux critères de sécurité
                    établis par nos services. En laissant une note
                    aussi bien à l'hôte qu'au locataire, cela permet à
                    nos équipes de vérifier que les standards sont
                    bien respectés. Nous organisons également des
                    ateliers sur la sécurité domestique pour nos
                    notes.
                </p>
                
                }

            </button>
            </>
            
            :
             id && <Colapse id={id}/> }
            </>
          
                    
        </div>
    );
};

export default Accordions;

