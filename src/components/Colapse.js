import React,{useState, useEffect} from 'react';
//import { useNavigate, useParams } from 'react-router-dom';

//importation des datas nécessaires
import {data} from "../Data"

const Colapse = ({id}) => {

     //state de gestion des images du produit
     const [productCurrent, seProductCurrent] = useState({});
    
     useEffect(() => {
 
         const getProduct = () => {
          //fonction de récupération des images du produit
        
            if(data && data.length>0){

                const product = data.find(item => item.id === id);
    
                seProductCurrent(
                    (prevProduct)=> ({...prevProduct, ...product})
                );
            }

         }
         getProduct();
 
      

     }, [id]);
 
     
     
     //gestion du state des flêches
     const [ arrow, setArrow ] = useState({
 
         isOpenDescription: true,
         isLockDescription: false,
         isOpenEquipes: true,
         isLockEquipes: false
 
     }) 

    return (
        <div className='GetProduct__ContainerArrow'>
                    
                    <button className='containerDescriptionEquipe'
                        onClick={ ()=> setArrow({...arrow, isOpenDescription: !arrow.isOpenDescription, isLockDescription: !arrow.isLockDescription}) }>

                        <div className="containerDescriptionEquipe__item arrowDescription">
                            
                            
                            <p className='btnArrow'>Description</p>
                                

                            
                            {   
                                arrow.isOpenDescription ?
                                <span><i className="fa-solid fa-chevron-up arrowUpDescription"></i></span>
                                :
                                <span><i className="fa-solid fa-angle-down arrowDownDescription"></i></span>
                            
                            }
                            
                        </div>

                       { arrow.isLockDescription && <p className='valueDescription contentValue'>
                            {productCurrent && productCurrent.description && productCurrent.description}
                        </p>}

                    </button>
                   
                    <button className='containerDescriptionEquipe'  onClick={ ()=> setArrow({...arrow, isOpenEquipes: !arrow.isOpenEquipes, isLockEquipes: !arrow.isLockEquipes}) }>
                        <div className="containerDescriptionEquipe__item arrowEquipements">
                           
                            <p className='btnArrow'>Equipements</p>
                               
                            
                            {   
                                arrow.isOpenEquipes ?
                                <span className='valueSpanDescriptionEquipements'><i className="fa-solid fa-chevron-up arrowUpEquipements"></i></span>
                                :
                                <span><i className="fa-solid fa-angle-down arrowEquipements"></i></span>
                            
                            }

                        </div>

                       { arrow.isLockEquipes && <p className='valueDescription contentValue'>
                            {
                                
                                 productCurrent && productCurrent.equipments && productCurrent.equipments.map((item,index)=>
                                  <span className='valueItemEquipements valueSpanDescriptionEquipements' key={`${item}-${index}`} >{item}</span>
                                )

                               
                                
                            }
                        </p>}

                    </button>

                  
                            
                </div>
    );
};

export default Colapse;