import React, { useState } from 'react';
import HeroShop from '../components/heroShop';
import ProductList from '../components/ProductList';
import Products from '../data/Products';
import iconFacebook from '../assets/logos/icon_facebook.png';
import iconInstagram from '../assets/logos/icon_ig.png';
import iconTwitter from '../assets/logos/icon_tw.png';
import fleche from '../assets/logos/flèche_down_header.png';


function Eshop() {
  const [data, setData] = useState(Products);

  return (
    <>
      <HeroShop />
      <div className="scroll">

        <img className="social" src={iconFacebook} alt="icon_facebook" />
        <img className="social" src={iconInstagram} alt="icon_instagram" />
        <img className="social" src={iconTwitter} alt="icon_twitter" />

      </div>
      <div className="container">
        <img className="fleche" src={fleche} alt='fleche' />
        <div className="row">
          <div className="col-md-3">

            <h5>Filter by category</h5>

          </div>
          <div className="col-md-9">
            <ProductList />
            <div className="row">
              {data.map((values) => {
                const { id, title, price, imageUrl } = values;
                return (
                  <div className="col-md-4" key={id}>
                    <div className="card mb-4">
                      <div className="card-body bg-black ">
                        <img src={imageUrl} className="card-img-top" alt="" />
                        <div className='titre'>
                          <h5 className="card-title">{title}</h5>
                          <p>{price}$</p>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Ajouter au panier
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eshop;
