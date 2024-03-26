import React,{useState} from 'react';

const BtnColapse = () => {

  
    //gestion des states des flêches
    let [arrow, setArrow] = useState({

        isOpenFiabilite: true,
        isOpenRespect: true,
        isOpenService: true,
        isOpenSecurite: true,
    });

    

    return (

        <div  className='BtnColapse'>

            <button className='containerDescriptionEquipe'
                onClick={ ()=> setArrow({...arrow, isOpenFiabilite: !arrow.isOpenFiabilite, }) }>

                <div className="containerDescriptionEquipe__item arrowDescription">
                    
                    
                    <p className='btnArrow'>Fiabilité</p>

                    
                    {   
                        arrow.isOpenFiabilite ?
                        <span><i class="fa-solid fa-chevron-up"></i></span>

                        :
                        <span><i class="fa-solid fa-chevron-down"></i></span>
                    
                    }
                    
                </div>

                { !arrow.isOpenFiabilite && <p className='valueDescription contentValue'>
                    { "Ma Fiabilité" }
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

                { !arrow.isOpenRespect && <p className='valueDescription contentValue'>
                     Ma Fiabilité
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

                { !arrow.isOpenService && <p className='valueDescription contentValue'>
                    Mon service
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

                { !arrow.isOpenSecurite && <p className='valueDescription contentValue'>
                    Ma sécurité
                </p>
                
                }

            </button>
                   
        </div>
    );
};

export default BtnColapse;