import React from 'react';
import styled from 'styled-components';
import PortfolioNav from './PortfolioNav';
import BottomNav from './BottomNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt as fasMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons'
import { faPencilRuler as farPencilRuler } from '@fortawesome/pro-regular-svg-icons';
import { faCoffeeTogo as farCoffeeTogo } from '@fortawesome/pro-regular-svg-icons';
import { faFrostyHead as farFrostyHead } from '@fortawesome/pro-regular-svg-icons';
// import { faRabbit as fasFaRabbit } from '@fortawesome/pro-solid-svg-icons'
// import { faRabbit as farFaRabbit } from '@fortawesome/pro-regular-svg-icons';
// import { faRabbit as falFaRabbit } from '@fortawesome/pro-light-svg-icons';
// import { faRabbit as fadFaRabbit } from '@fortawesome/pro-duotone-svg-icons';
// import { fromPromise } from 'apollo-link';
import ContactForm from './ContactForm';

const HomePageStyle = styled.div`
  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
    min-height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  svg {
    width: 35px;
    height: 35px;
  }
  body {
    font-family: ${props => props.theme.fontFamily};
    min-height: 100%;
    background: linear-gradient(to top, #dfe9f3 0%, white 100%);
  }
  body {
    font-family: 'Fira Sans', sans-serif; 
    width: 100%;
  }
  /** Colors and Categroes **/
  .lodgement {
  color: #274154;
  }
  .concert {
  color: #da595e;
  }
  .class {
  color: #598dda;
  }
  .outdoor-activity {
  color: #940ad4;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    color:  #484848;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  img {
    max-width: 100%;
  }
  .container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  }
  .hero {
  height: 100vh;
  /* background-image: url(https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575321901/Raices/Medellin/colombia-2722716.jpg); */
  background-image: url(../static/medellinBackground.jpg);
  background-size: cover;
  background-position: bottom center;
  display: grid;
  grid-template-rows: 150px auto;
  }
.header {
  display: grid;
  grid-template-columns: 10% auto 30%;
  width: 100%;
  padding: 1rem;
  align-items: flex-start;
}
.logo h2 {
color: #fff;
}
.main-nav {
display: none;
}
@media (min-width: 768px) {
.main-nav {
  grid-column: 3 / 4;
  display: grid;
  justify-content: flex-end;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}
.main-nav a {
  color: #fff;
  text-decoration: none;
  font-size: .8rem;
  padding: 1rem 1rem 2rem 1rem;
  text-align: center;
}
.main-nav a:hover {
  border-bottom: 1px solid #fff;
}
}
.search-form-container {
display: grid;
grid-template-columns: 1fr;
align-items: center;
}
@media (min-width: 768px) {
.search-form-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: flex-start;
}
}
.search-form {
background-color: #fff;
padding: 2rem;
border-radius: 5px;
}
.search-form h1 {
margin: 0 0 1rem 0;
}

.search-form form {
display: grid;
grid-template-rows: repeat(4, auto);
grid-template-columns: repeat(2, 1fr);
grid-row-gap: 1rem;
}
.search-form .field {
/** Position from the parent element **/
grid-column: 1 / 3;
/** Position the labels **/
display: grid;
grid-template-rows: repeat(2, auto);
grid-row-gap: .5rem;
}
.search-form .date {
display: grid;
grid-template-rows: repeat(2, auto);
grid-row-gap: .5rem;
}
.search-form .date {
grid-row: 2 / 3; 
}
.search-form .date:nth-child(1) {
grid-column: 1 / 2;
}
.search-form .date:nth-child(2) {
grid-column: 2 / 3;
}
.search-form label {
text-transform: uppercase;
font-size: .8rem;
font-weight: bold;
}
.search-form input[type="text"],
.search-form input[type="date"],
.search-form select {

-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
padding: .8rem;
border: 1px solid #e1e1e1;
background-color: white;
}
.submit {
grid-column: 2 / 3;
display: grid;
justify-content: flex-end;
}
.submitBtn {
background-color: rgb(255, 90, 95);
color: #fff;
padding: 1rem 2rem;
border-radius: 5px;
border:none;
}

main > section {
margin-bottom: 2rem;
}
.cards-container {
display: grid;
grid-gap: 1rem;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.cards-container.agent {
display: grid;
grid-gap: 1rem;
grid-template-columns: repeat(auto-fit, 190px);
}
.cards-container .show {
display: grid;
background-color: #fff;
border-radius: 5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
justify-content: center;
align-items: center;
}
.card.show {
display: grid;
margin-top: 1rem;
background-color: #fff;
border-radius: 5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
justify-content: center;
align-items: center;
height: 50px;
width: 200px;
}
.card.show:hover {
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.countries .cards-container {
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.card.neighborhoods img{
width: 100%;
height: 315px;
border-radius: 5px;
object-fit: cover;
}
.card img {
display: block;
width: 100%;
height: 210px;
border-radius: 5px;
}
.card .info {
padding-top: 1rem;
}
.card .category {
text-transform: uppercase;
font-size: .9rem;
font-weight: 700;
}
.card .title {
font-size: 1.6rem;
font-weight: 700;
margin: 0;
}
.card .price {
font-size: .9rem;

}
.card .price.new {
background-color: rgb(0, 119, 126);
padding: .4rem .4rem .4rem .4rem;
color: #fff;
border-radius: 5px;
}
.countries .card {
position: relative;
}
.countries .info {
position: absolute;
width: 100%;
bottom: 1rem;
left: 0;
color: #fff;
text-align: center;  
}
.countries .info .title {
font-size: 1.4rem;
font-weight: bold;
margin: 0;
}
.countries .info .price {
font-size: .8rem;
}
.footerBtn {
position: fixed;
bottom: 1rem;
right: 1rem;
padding: .5rem 2rem;
background-color: #fff;
color: #484848;
text-decoration: none;
}
.footer {
border-top: 1px solid #dbdbdb;
padding-top: 3rem 0;
position: fixed;
width: 100%;
bottom: -150%;
background-color: #fff;
transition: bottom .3s ease-in-out;
}
.footer.active {
bottom: 0;
}
.footer .container {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 1rem;
}
.nav-footer .menu {
display: grid;
grid-template-rows: repeat(auto-fit, auto);
grid-row-gap: .5rem;
}
.nav-footer .menu a {
color: #484848;
text-decoration: none;
display: block;
padding-top: .5rem;
font-size: .9rem;
}
.nav-footer h3 {
font-size: 1.2rem;
}
.nav-footer .menu a .new {
background-color: rgb(0, 119, 126);
margin-left: 1rem;
padding: .2rem .4rem .4rem .4rem;
color: #fff;
border-radius: 5px;
}
.social-nav {
display: flex; 
justify-content: flex-end;
}
.social-nav a {
text-decoration: none;
margin-right: 1rem;
}
.social-nav a:last-of-type {
margin-right: 0;
}
.social-nav a::before {
font-family: 'Font Awesome 5 Brands';
color: #484848;
font-size: 1.8rem;
}
.social-nav a[href*='facebook.com']::before {
content: '\f39e';
}
.social-nav a[href*='twitter.com']::before {
content: '\f099';
}
.social-nav a[href*='instagram.com']::before {
content: '\f16d';
}
.social-nav a span {
display: none;
}
`

export default function HomePageAirBnB() {
  return (
    <HomePageStyle>
    <div class="hero">
      <header class="header">
        <div class="logo">
          <h2>Raíces</h2>
        </div>
        <nav class="main-nav">
          <a href="#">Become a Host</a>
          <a href="#">Help</a>
          <a href="#">Sign up</a>
          <a href="#">Log in</a>
        </nav>
      </header>

      <div class="container search-form-container">
          <div class="search-form">
              <h1>Book unique homes and experiences.</h1>

              <form action="#">
                  <div class="field">
                      <label>Where</label>
                      <input type="text" placeholder="City"/>
                  </div>
                  <div class="date">
                      <label>Check in</label>
                      <input type="date"/>
                  </div>
                  <div class="date">
                      <label>Check Out</label>
                      <input type="date"/>
                  </div>
                  <div class="field">
                      <label>Guests</label>
                      <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                      </select>
                  </div>
                  <div class="submit">
                      <input type="submit" class="submitBtn" value="Search"/>
                  </div>
              </form>
          </div>
      </div>     
    </div>
    <main class="content container">
        <section class="countries">
          <h2>Neighborhoods</h2>
          <div class="cards-container">
            <div class="card neighborhoods">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575403179/Raices/Poblado/poblado.jpg" alt=""/>
              <div class="info">
                <p class="title">El Poblado</p>
                <p class="price">$210,000 USD Average</p>
              </div>
            </div> 
            <div class="card neighborhoods">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575403683/Raices/Envigado/envigado.png" alt=""/>
              <div class="info">
                <p class="title">Envigado</p>
                <p class="price">$187,000 USD Average</p>
              </div>
            </div> 
            <div class="card neighborhoods">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575403905/Raices/Laureles/laureles_medellin.png" alt=""/>
              <div class="info">
                <p class="title">Laureles</p>
                <p class="price">$110,000 USD Average</p>
              </div>
            </div> 
            <div class="card neighborhoods">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575404089/Raices/Patio%20Bonito/patio_bonito.jpg" alt=""/>
              <div class="info">
                <p class="title">Patio Bonito</p>
                <p class="price">$193,000 USD Average</p>
              </div>
            </div> 
            <div class="card neighborhoods">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575404407/Raices/El%20Centro/centro.jpg" alt=""/>
              <div class="info">
                <p class="title">El Centro</p>
                <p class="price">$84,000 USD Average</p>
              </div>
            </div>           
          </div> 
          <div class="card show"><span>Show all neighborhoods ></span></div>
        </section>
        <section class="explore">
          <h2>Nearby Towns</h2>
          <div class="cards-container">
            <div class="card">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575405400/Raices/San%20Rafael/sanrafael.jpg" alt=""/>
              <div class="info">          
                <p class="title">
                  San Rafael
                </p>
                <p class="price">12 homes</p>
              </div>
            </div> 
            <div class="card">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575405590/Raices/Guatape/guatape.jpg" alt=""/>
              <div class="info">
                <p class="title">
                  Guatape
                </p>
                <p class="price">17 homes</p>
              </div>
            </div> 
            <div class="card">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575406654/Raices/Santa%20Fe%20de%20Antoquia/santafedeantoquia.jpg" alt=""/>
              <div class="info">
                <p class="title">
                  Santa Fe de Antoquia 
                </p>
                <p class="price">13 homes</p>
              </div>
            </div> 
           
          
              
          </div> 
          <div class="card show"><span>Show all towns ></span></div>
        </section>
        <section class="hosting">
          <h2>Unique homes for your next trip</h2>
          <div class="cards-container">
            <div class="card">
              <img src="img/lodgement1.jpg" alt=""/>
              <div class="info">
                <p class="category lodgement">
                  Beautiful house on the beach
                </p>
                <p class="title">
                  Beautiful house 2 bedrooms
                </p>
                <p class="price">$3,200 per night</p>
              </div>
            </div> 
            <div class="card">
              <img src="img/lodgement2.jpg" alt=""/>
              <div class="info">
                <p class="category lodgement">
                  1 room in Los Angeles
                </p>
                <p class="title">
                  1 room, downtown LA
                </p>
                <p class="price">$2,100 per night</p>
              </div>
            </div> 
            <div class="card">
              <img src="img/lodgement3.jpg" alt=""/>
              <div class="info">
                <p class="category lodgement">
                  Cottage in the woods
                </p>
                <p class="title">
                  Cottage for 6 persons
                </p>
                <p class="price">$3,200 per night</p>
              </div>
            </div>           
          </div> 
          <div class="card show"><span>Show all homes ></span></div>
        </section>

        <section class="explore">
          <h2>Top rated agents</h2>
          <div class="cards-container agent">
            <div class="card agent">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1570485457/Raices/AgentPhotos/Lori_Diggs.jpg" alt=""/>
              <div class="info">
                <p class="category class">
                  Negotiations
                </p>
                <p class="title">
                  Jennifer Smith
                </p>
                <p class="price">12 homes listed</p>
              </div>
            </div> 
            <div class="card agent">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg" alt=""/>
              <div class="info">
                <p class="category concert">
                  New Contructions
                </p>
                <p class="title">
                  James Bannon
                </p>
                <p class="price">24 homes sold</p>
              </div>
            </div> 
            <div class="card agent">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1570485457/Raices/AgentPhotos/James_Kim.jpg" alt=""/>
              <div class="info">
                <p class="category class">
                  Contracts
                </p>
                <p class="title">
                  James Kim
                </p>
                <p class="price new">New Agent</p>
              </div>
            </div>
            <div class="card agent">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1570485457/Raices/AgentPhotos/Jill_Smith.jpg" alt=""/>
              <div class="info">
                <p class="category outdoor-activity">
                  First Time Buyers
                </p>
                <p class="title">
                  Natalio Giraldo-Hincapie
                </p>
                <p class="price">$100 per person</p>
              </div>
            </div>          
          </div> 
          <div class="card show"><span>Show all agents ></span></div>
        </section>  
      </main>
      <footer id="footer" class="footer">
        <div class="container">
          <div class="nav-footer">
            <h3>Raíces</h3>
            <nav class="menu">
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Policies</a>
              <a href="#">Help</a>
            </nav>
          </div>
          <div class="nav-footer">
            <h3>Discover</h3>
            <nav class="menu">
              <a href="#">Trust & Safety</a>
              <a href="#">Travel Credit</a>
              <a href="#">Gift Cards</a>
              <a href="#">Raíces Citizen</a>
              <a href="#">Events <span class="new">New</span></a>
            </nav>
          </div>
          <div class="nav-footer">
            <h3>Hosting</h3>
            <nav class="menu">
              <a href="#">Why Host</a>
              <a href="#">Hospitality</a>
              <a href="#">Responsible Hosting</a>
              <a href="#">Community Center</a>
            </nav>
          </div>      
          <div class="nav-footer">            
            <nav class="social-nav">
              <a href="http://facebook.com"><span>Facebook</span></a>
              <a href="http://twitter.com"><span>Twitter</span></a>            
              <a href="http://instagram.com"><span>Instagram</span></a>
            </nav>
            <nav class="menu">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Sitemap</a>             
            </nav>
          </div>         
        </div>

      </footer>
      <a href="#footer" class="footerBtn">Terms, Privacy, Currency & more</a>
      
    </HomePageStyle>
  );
}
