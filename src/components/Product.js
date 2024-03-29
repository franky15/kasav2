
import { useNavigate } from 'react-router-dom';

//importation des datas nécessaires
import {data} from "../Data"

const Product = () => {

    const navigate = useNavigate();
    
    const navigateProduct = (id) => {

        navigate("/product/"+id);
    }
    
    return (
        <div className="Home__content">
               
               
        {
            data.map((product, index) => (
               
                    <div key={index} className="currentProduct" onClick={ ()=> navigateProduct(product.id)}
                        style={{ 
                            backgroundImage: `url(${product.cover})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} >
                       
                        <h2>{product.title}</h2>
                       
                    </div>
                
            ))
        }
  

        </div>
    );
};

export default Product;