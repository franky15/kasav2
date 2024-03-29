import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//importation des datas nécessaires
import {data} from "../Data"

//importation des composants
import Colapse from '../components/Colapse';
import Carrousel from '../components/Carrousel';
import Accordions from '../_utils/Accordions';
import Error from '../_utils/Error';

const GetProduct = () => {

    console.log(data);
    
    const {id} = useParams();

    //state de gestion des images du produit
    const [productCurrent, setProductCurrent] = useState({});

    //state d"ouverture du composant Error
    const [isOpenError, setIsOpenError] = useState(true);
    
    
    useEffect(() => {

        const getProduct = () => {
         //fonction de récupération des images du produit
       
            if( data && data.length >0 ){

                const product = data.find(item => item.id === id);

                if(!product){

                   // navigate("/");
                   setIsOpenError(false);

                }else{

                    /*je mets à jour comme ceci car ça évite de rajouter productCurrent comme dépendance et ça évite
                    une boucle infinie pour le useEffect car chaque fois que productCurrent change le useEffect sera rechargé
                    je copie donc l'objet d'avant que je remplace par l'objet d'après puis qui va mettre à jour le state final productCurrent
                    */
                    setProductCurrent(
                        (prevProduct) => ({ ...prevProduct, ...product })
                    );

                }
                

                
            }
            
        }
        getProduct();

     

    }, [id]);

   

    //fonction de gestion des étoiles
    const renderStars = (rating) => {

        const stars = [];
        const ratingMax = 5;

        for (let i = 0; i < ratingMax; i++) {

            const starClass = i < parseInt(rating) ? <i className="fa-solid fa-star" style={{color: "#FF6060", marginRight: 10}}></i> : <i className="fa-solid fa-star" style={{color: "#C4C4C4", marginRight: 10}}></i>;
           
            stars.push(
                <span key={i} className='nameStar__star--item'>
                 
                   {starClass}
                </span>
            );
        }
        return stars;
    };
    
    
    return (
        <>
        
       { isOpenError ? 
       
       <div className="GetProduct">

           { 
            productCurrent   &&
            <Carrousel id={id} productCurrent={productCurrent}/>
           
           }
            
            <section className="GetProduct__content">
               
               <div className="GetProduct__content--container">
                   
                   <div className="containerInfo">

                        <h2 className="containerInfo__title">{productCurrent.title ?? "Titre"}</h2>
                        <p className="containerInfo__localisation">{productCurrent.location ?? "Localisation"} </p>
                        <div className="containerInfo__btn">

                            {
                              productCurrent && productCurrent.tags && productCurrent.tags.map( (item, index) =>
                                <button key={ `${item.id}-${index}` } className="containerInfo__btn--item">{item}</button>
                                ) 
                            
                            }
                          
                        </div>
                    </div>

                    <div className="nameStar">
                        <div className="nameStar__name">
                            <p className='nameStar__name--item'>
                                {productCurrent && productCurrent.host && productCurrent.host.name.split(' ')[0]} <br />
                                {productCurrent && productCurrent.host && productCurrent.host.name.split(' ')[1]}
                            </p>
                            <div className='nameStar__name--img'>
                                <p className='hostImg' style={{ 
                                        backgroundImage: `url(${productCurrent && productCurrent.host && productCurrent.host.picture})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }} >

                                </p>
                            </div>

                        </div>
                        <div className="nameStar__star">
                            {productCurrent  && renderStars(productCurrent.rating) }
                        </div>

                    </div>
                      
                  

               </div>
               
               
                { /*productCurrent  &&   <Colapse id={id}/>*/}
                { productCurrent  &&<Accordions id={id}/>}

            </section>

        </div>
        :
        <Error/>
        
        
        }

        </>
    );
};

export default GetProduct;