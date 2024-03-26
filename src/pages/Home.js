import React from 'react';


//importation des composants
import Product from '../components/Product';

//importation des composants
import Banner from '../components/Banner';

const Home = () => {

    return (
        <div className="Home">
            
            <Banner />
            <Product/>
          
        </div>
    );
};

export default Home;