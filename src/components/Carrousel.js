import React,{useState, useEffect} from 'react';

const Carrousel = ({productCurrent}) => {

    //gestion du state des images
    let [ itemImg, setItemImg ] = useState({im: ""})

    //gestion du state des incrémentations des indices
    let [incrementation, setIncrementation ] = useState(0)

    //gestion de l'image de départ du carrousel avec le useEffect
    useEffect(() => {

        console.log("****productCurrent");
        console.log(productCurrent);

         /*je mets à jour comme ceci car ça évite de rajouter productCurrent comme dépendance et ça évite
        une boucle infinie pour le useEffect car chaque fois que productCurrent change le useEffect sera rechargé
        je copie donc l'objet d'avant que je remplace par l'objet d'après puis qui va mettre à jour le state final productCurrent
        */
        if ( productCurrent.pictures &&  productCurrent.pictures.length > 0 ) {

            setItemImg( (prevImg) => ({ ...prevImg, im: productCurrent.pictures[0] }));
        }

    },[productCurrent])

    //fonction de gestion des images suivantes
    const manageImgNext = () => {
     
        // Détermination du nouvel index d'image 
        //ATTENTION: pour que productCurrent.pictures.length soit égale à incrementation, il faut retirer 1 à productCurrent.pictures.length et la valeur précédente de incrementation est toujours réutilisée
        const newIndex = incrementation === productCurrent.pictures.length - 1 ? 0 : incrementation + 1;
    
        setIncrementation(newIndex);
    
        setItemImg({
            ...itemImg,
            im: productCurrent.pictures[newIndex]
        });
    };
    
   
    //fonction de gestion des images précédentes
    const manageImgPrev = () => {
       
    
        // Déterminer le nouvel index d'image
        /*ATTENTION: ici au premier clic, incrementation est égal à 0, donc il faut retirer 1 à productCurrent.pictures.length
         puis au prochain clic,incrementation est égal à productCurrent.pictures.length - 1 on va donc retirer 1 à incrementation ainsi de suite
         */
        const newIndex = incrementation === 0 ? productCurrent.pictures.length - 1 : incrementation - 1;
    
        setIncrementation(newIndex);
    
        setItemImg({
            ...itemImg,
            im: productCurrent.pictures[newIndex]
        });
    };

    

    return (

        <section className="carrousel" style={{ 
                            backgroundImage: `url(${ itemImg.im })`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} >

           {
           
            productCurrent.pictures && productCurrent.pictures.length > 1 && (
            <>
             <button className="btn btnBack"><i className="fa-solid fa-chevron-left" onClick={manageImgPrev}></i></button>
            <button className="btn btnNext"><i className="fa-solid fa-chevron-right" onClick={manageImgNext}></i></button>
            
            </>
            
            )
            }
       
        </section>
    );
};

export default Carrousel;