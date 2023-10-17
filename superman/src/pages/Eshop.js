import React, { useState } from 'react';
import HeroShop from '../components/heroShop';
import ProductList from '../components/ProductList';
import Products from '../data/Products';
import iconFacebook from '../assets/logos/icon_facebook.png';
import iconInstagram from '../assets/logos/icon_ig.png';
import iconTwitter from '../assets/logos/icon_tw.png';
import fleche from '../assets/logos/flèche_down_header.png';
import panier from '../assets/icones/icone_1.png';

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
        <img className="fleche" src={fleche} alt="fleche" />
        <img src={panier} alt="" />
        <div className="row">

          <div className="col-md-3">
            <div>
              <div>
                <div className="filters">
                  <h4>Filtres</h4>

                  <div className="price-filter">
                    <h5>Prix</h5>
                    <input
                      type="range"
                      id="price-range"
                      min="0"
                      max="200"
                      step="10"
                      value="100"
                      className="price-range-slider"
                    />
                    <span id="price-value">$0</span>
                    <span id="price-value">$100</span>
                    <span id="price-value">$200</span>
                  </div>

                  <div className="category-filter">
                    <h4>Catégorie</h4>
                    <div id="category-options">
                      <label>
                        <input type="checkbox" value="tous" className='round-checkbox' /> Toutes les catégories
                      </label>
                      <label>
                        <input type="checkbox" value="vetements" className='round-checkbox' /> Vêtements
                      </label>
                      <label>
                        <input type="checkbox" value="chaussures" className='round-checkbox' /> Chaussures
                      </label>
                      <label>
                        <input type="checkbox" value="accessoires" className='round-checkbox' /> Accessoires
                      </label>
                    </div>
                  </div>

                  <p>Catégories sélectionnées : <span id="selected-categories">Toutes les catégories</span></p>


                  <div className="color-filter">
                    <h4>Couleur</h4>
                    <label>
                      <input type="checkbox" name="color" value="red" className="round-checkbox" />
                      Rouge
                    </label>
                    <label>
                      <input type="checkbox" name="color" value="blue" className="round-checkbox" />
                      Bleu
                    </label>
                    <label>
                      <input type="checkbox" name="color" value="green" className="round-checkbox" />
                      Vert
                    </label>
                    {/* Ajoutez d'autres couleurs avec des cases à cocher au besoin */}
                  </div>



                  <div className="universe-filter">
                    <h4>Univers</h4>
                    <div id="category-options">
                      <label>
                        <input type="checkbox" value="tous" className='round-checkbox' /> batman
                      </label>
                      <label>
                        <input type="checkbox" value="Autre" className='round-checkbox' /> batman vs superman
                      </label>
                      <label>
                        <input type="checkbox" value="batman" className='round-checkbox' /> the dark knight rise
                      </label>
                      <label>
                        <input type="checkbox" value="Autre" className='round-checkbox' /> Autre comics et anime
                      </label>
                    </div>
                  </div>
                

                <button className="apply-filters-button">Appliquer les filtres</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <ProductList />
          <div className="row">
            {data.map((values) => {
              const { id, title, price, imageUrl } = values;
              return (
                <div className="col-md-4" key={id}>
                  <div className="card mb-4">
                    <div className="card-body bg-black">
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
    </div >
    </>
  );
}

export default Eshop;
