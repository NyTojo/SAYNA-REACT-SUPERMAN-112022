import React from 'react'
import '../styles/HeroShop.css';

const HeroShop = ({titre,name,age})=> {
  //const titre = props.titre;
  //const name = props.name;
  return (
   <section id='myhero'>
      <div className='myheroImage'>
        <div className='container'>
           <h1 className='myhero-title'>ENVIE D’UN SLIP JAUNE ?</h1>
        </div>
      </div>
   </section>
  );
}
 
export default HeroShop;