import React, { useState } from 'react';
import '../styles/Home.css';

import iconFacebook from '../assets/logos/icon_facebook.png';
import iconInstagram from '../assets/logos/icon_ig.png';
import iconTwitter from '../assets/logos/icon_tw.png';
import TomWelling from '../assets/images/img3.jpg'
import HenryCavil from '../assets/images/img2.png';
import BrandonRouth from '../assets/images/img4.jpg';
import LexLuthor from '../assets/images/img6.png';
import Doomsday from '../assets/images/img5.png';
import generalzod from '../assets/images/img7.png';
import jonathanMarthaKent from '../assets/images/img8.png';
import JorEl from '../assets/images/img9.png';
import LoisLane from '../assets/images/img10.png';
import boutongauche from '../assets/logos/icon_flèche_1.png';
import boutondroite from '../assets/logos/icon_flèche_2.png';
import supermancinéma from '../assets/images/img12.png';

import guillemetOpen from '../assets/logos/icon_guillemets_1.png';
import guillemetClose from '../assets/logos/icon_guillemets_2.png';
import open from '../assets/logos/icon_flèche_1.png';
import dcLogo from '../assets/logos/logoDC.png'
const Home = () => {

  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [frequency, setFrequency] = useState('');
  const [selection, setSelection] = useState('film');
  const [message, setMessage] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNewsletterChange = (event) => {
    setNewsletter(event.target.checked);
  };

  const handleFrequencyChange = (selectedFrequency) => {
    setFrequency(selectedFrequency);
  };

  const handleSelectionChange = (event) => {
    setSelection(event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Newsletter: ", newsletter);
    console.log("Frequency: ", frequency);
    console.log("Selection: ", selection);
    console.log("Message: ", message);
    setEmail('');
    setNewsletter(false);
    setFrequency('');
    setSelection('film');
    setMessage('');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const showPopup = () => {
    setPopupVisible(true); // Affiche la pop-up
  };


  return (
    <>
      <div className="scroll">

        <img className="social" src={iconFacebook} alt="icon_facebook" />
        <img className="social" src={iconInstagram} alt="icon_instagram" />
        <img className="social" src={iconTwitter} alt="icon_twitter" />

      </div>
      <section id="hero">
        <div className="container">
          <div className="espace-vertical"></div>
          <div className="espace-vertical"></div>
          <div className="content">
            <img className="dcLogo" src={dcLogo} alt="logo DC" />
            <div className='dctext'>
              <h1>SUPERMAN</h1>
              <h5 className="titre">l'HOMME D'ACIER</h5>
            </div>
          </div>
        </div>
        
      </section>
      <div className="espace-vertical"></div>
      <div className="espace-vertical"></div>
      <section id="superman-cinema">
        <div className="container">
          <h1 className="titre">Superan au Cinema</h1>
          <p className="description">Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un
            vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta
            Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de
            fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine.

            Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs
            se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par
            Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son
            costume et devient Superman, l’homme d’acier aux yeux du monde.</p>
          <div className="superman-personnage">
            <div className="superman-item">
              <img src={HenryCavil} alt="HenryCavil" />
              <div className="pochette">
                <div className="personnage-info">

                  <h3>Henry Cavil<br /> <p>(2021)</p></h3>
                </div>
              </div>
            </div>
            <div className="superman-item">
              <img src={TomWelling} alt="Tom Welling" />
              <div className="pochette">
                <div className="personnage-info">

                  <h3>Tom Welling <br /> <p>(2021)</p></h3>
                </div>
              </div>
            </div>
            <div className="superman-item" >
              <img src={BrandonRouth} alt="Brandon Routh" />
              <div className="pochette">
                <div className="personnage-info" >

                  <h3>Brandon Routh <br /> <p>(2006)</p></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="espace-vertical"></div>
      <div className="espace-vertical"></div>
      <section id="némésis">
        <div className="container">
          <div className="imgtxt"><h1 className="titre">Némésis</h1>
          </div>
          <p className="description">Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor,
            fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui
            participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son
            passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone
            Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman.
            Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires.</p><br /><br />
          <div className="superman-personnage">
            <div className="superman-item">
              <img src={Doomsday} alt="Doomsday " />
              <div className="pochette">
                <div className="personnage-info">

                  <h3>Doomsday <br /> <p>(2013)</p></h3>
                </div>
              </div>
            </div>
            <div className="superman-item">
              <img src={LexLuthor} alt="Lex Luthor" />
              <div className="pochette">
                <div className="personnage-info">
                  <h3>Lex Luthor<br /> <p>(2016)</p></h3>
                </div>
              </div>
            </div>
            <div className="superman-item" >
              <img src={generalzod} alt="generalzod" />
              <div className="pochette">
                <div className="personnage-info" >

                  <h3>general zod <br /> <p>(2013)</p></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="espace-vertical"></div>
      <div className="espace-vertical"></div>
      <section id="Alliés">
        <div className="container">
          <div className="imgtxt"><h1 className="titre">Alliés</h1>

          </div>
          <p className="description">Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des
            Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la
            Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et
            Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur le soutien indéféctible de sa
            mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”</p><br /><br /><br />
          <div className="superman-personnage">
            <div className="superman-item">
              <img src={jonathanMarthaKent} alt="Jonathan-Martha-Kent" />
              <div className="pochette">
                <div className="personnage-info">
                  <h3>jonathan et Martha Kent <br /> <p>(parents)</p></h3>
                </div>
              </div>
            </div>
            <div className="superman-item">
              <img src={JorEl} alt="JorEl" />
              <div className="pochette">
                <div className="personnage-info">
                  <h3>Jor El <br /> <p>(pere de superman)</p></h3>
                </div>
              </div>
            </div>
            <div className="superman-item" >
              <img src={LoisLane} alt="Lois Lane" />
              <div className="pochette">
                <div className="personnage-info" >
                  <h3>Lois Lane <br /> <p>()</p></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="espace-vertical"></div>
      <section id="superman-justice-league">
        <div className="container">
          <h1 className="titre">superman vs Superman</h1>
          <p className="description">
            Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait contre Zod, l’affrontement fait des dégats
            et détruit partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la
            ville qui fait beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est
            inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui
            seul détruire le monde d'une simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa perte.


            De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre superman. Ce dernier n'est plus que
            l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin
            par le Joker, il n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels. Superman souhaite simplement
            lui rappeler le code moral des “justicier” en usant de la force s’il le faut pour que superman cesse son comportement abusif.
          </p>
        </div>
        <div className="espace-vertical"></div><div className="espace-vertical"></div><div className="espace-vertical"></div>
        <section id="multimedia">
          <div className="container">
            <h1 className="titre">MULTIMEDIA</h1>
            <button className="left">
              <img src={boutongauche} alt="boutongauche" />
            </button>
            <button className="right">
              <img src={boutondroite} alt="boutondroite" />
            </button>
            <div className="slider-multimedia">
              <div className="slider-image">
                <img src={supermancinéma} alt="supermanencinéma" />
              </div>
              <div className="slider-content">
                <h2>ACTION, ADVENTURE</h2>
                <h3>superman</h3>
                <p>IMDB: <span className="yellow" >7.1</span></p>
                <p>
                  Clark Kent, malgré son apparence humaine normale, est l'un
                  des derniers membres d'une race éteinte. Il se retrouve forcé
                  de révéler son identité lorsque la Terre est envahie par une
                  armée de survivants qui menacent détruire la planète.</p>
              </div>
            </div>
          </div>
        </section>
      </section>




      <section id="contact">
        <div className="form">
          <h2>PRENONS CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <label className="titre" htmlFor="email">
              ADRESSE EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse Email"
              value={email}
              onChange={handleEmailChange}
            />

            <label className="titre" htmlFor="newsletter">
              NEWSLETTER
            </label>
            <label htmlFor="check">
              En cochant cette case vous acceptez de recevoir l’actualité concernant les <br /> aventures de Superman : <input
                type="checkbox"
                id="check"
                name="newsletter"
                checked={newsletter}
                onChange={handleNewsletterChange}
              />
            </label>


            <div className={`dropdown ${isDropdownVisible ? "active" : ""}`} onClick={toggleDropdown} >
              <span>
                Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter
                <img className="icon" src={open} alt="open" />
              </span>
              {isDropdownVisible && (
                <div className="dropdown-content">
                  <a href="#contact" onClick={() => handleFrequencyChange('weekly')}>
                    Une fois par semaine
                  </a>
                  <a href="#contact" onClick={() => handleFrequencyChange('biweekly')}>
                    Une fois tous les deux semaines (2 fois par mois)
                  </a>
                  <a href="#contact" onClick={() => handleFrequencyChange('monthly')}>
                    Une fois par mois
                  </a>
                  <a href="#contact" onClick={() => handleFrequencyChange('quarterly')}>
                    Une fois tous les trois mois
                  </a>
                  <a href="#contact" onClick={() => handleFrequencyChange('semiannually')}>
                    Une fois tous les six mois
                  </a>
                </div>
              )}
            </div>


            <div id="popup" className="popup">
              <p>{message}</p>
            </div>
            <div>
              <p className="news">Souhaitez-vous recevoir des news</p>
            </div>
            <div className="btn-group">
              <input
                type="radio"
                id="film"
                checked={selection === 'film'}
                onChange={handleSelectionChange}
              />
              <label htmlFor="film"> Des Films</label>
              <input
                type="radio"
                id="comics"
                checked={selection === 'comics'}
                onChange={handleSelectionChange}
              />
              <label htmlFor="comics"> Des Comics</label>
              <input
                type="radio"
                id="tout"
                checked={selection === 'tout'}
                onChange={handleSelectionChange}
              />
              <label htmlFor="tout">De tout</label>
            </div>

            <br />
            <br />
            <button type="submit" className="confirmer" onClick={showPopup}>
              CONFIRMER
            </button>
            {isPopupVisible && (
              <div className="popup">
                <p>Message reçu</p>
              </div>
            )}
          </form>
        </div>
      </section>

      <div className="espace-vertical"></div>
      <section id="citation">
        <div className="container">
          <div className="guillemet-open">
            <img src={guillemetOpen} alt="guillemet" />
          </div>
          <div className="espace-vertical"></div>
          <div className="citation-carte">
            <div>
              <p className="citation-texte">- Que represente le S ?</p>
            </div>
            <div className="citation-auteur">
              <p>-Ce n'est pas un S. Sur ma planète cela signifie espoir.<br /></p>
              <p className='small-text'>     Man of steel, Lois Lane et Clark Kent</p>
              <p className="ltr">〇   〇   〇   〇  〇   〇   〇   〇</p>
            </div>
          </div>
          <div className="guillemet-close">
            <img src={guillemetClose} alt="guillemet" />
          </div>
        </div>
      </section>
      <div className="espace-vertical"></div>
      <div className="espace-vertical"></div>
      <div className="espace-vertical"></div>
    </>
  )
}

export default Home