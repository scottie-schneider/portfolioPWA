import React from 'react';
import styled from 'styled-components';
import PortfolioNav from './PortfolioNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt as fasMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons'
import { faPencilRuler as farPencilRuler } from '@fortawesome/pro-regular-svg-icons';
import { faCoffeeTogo as farCoffeeTogo } from '@fortawesome/pro-regular-svg-icons';
import { faFrostyHead as farFrostyHead } from '@fortawesome/pro-regular-svg-icons';

import ContactForm from './ContactForm';

const HomePageStyle = styled.div`
  * {
  font-family: 'Fira Sans', sans-serif;
}
body {
  width: 100vw;
  margin: 0;
}
h2, p {
  color: #7F8C8D;
}
ul {
  list-style: none;
}
ul li a {
  text-decoration: none;
  color: #000;
}
ul li a:hover {
  text-decoration: underline;
}
nav {
  position: fixed;
  display: flex;  
  align-items: center;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  z-index: 3;
  height: 56px;
  background-color: #fff;
}
nav ul {
  display: flex;
  flex: 1;
  list-style: none;
  justify-content: space-between;
  padding: .5rem 1rem .5rem 1rem;
  margin: 0;
}
nav ul a {
  text-decoration: none;
  color: #7F8C8D;
}
nav ul a.active {
  color: #3498DB;
}
/* 600px and above, position at top */
@media(min-width: 600px){
  nav {
    top: 0;
  }
  .hero {
    padding-top: 3rem;
  }
}
/* Hero section, with image and introduction */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
  height: 100vh;
  color: #7F8C8D;
}
.content h1 {
  font-size: 2.7rem;
}
.content p {
  font-size: 1.3rem;
}
.hero span {
  color: #3498DB;
}
/* Content Sections */
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 90%;
  margin: 0 auto;
}
.content ul {
  margin: 0 auto;
  padding-left: 0;
}
.hero .content a {
  color: #000;
}
.content p:first-of-type {
  margin-top: 2rem;  
}

/* Portfolio */
.portfolio {
  background-color: #fff;
  height: 100%;
  margin-bottom: 6rem;
}
.portfolio .spacer {
  background-color: #E74C3C;
  height: 1rem;
  margin-top: 3rem;
}
.portfolio img {
  padding-top: 1rem;
  width: 100%;
  height: 400px;
  object-fit: contain;
}
button {
  cursor: pointer;
}
button a {
  color: #3498DB;
}
/* Category Sections */
.categories {
  margin-top: 1rem;
  color: #95A5A6;
  text-transform: uppercase;
}
.categories span {
  font-size: 1.5rem;
}
.portfolio h2 {
  margin-top: 1rem;
  color: #000;
}
.portfolio h4 {
  margin-top: 1rem;
  color: #7F8C8D;
  line-height: 1.78;
  font-size: 1.2rem;
}
.portfolio button {
  margin-top: 3rem;
  margin-bottom: 2rem;
  border: .05rem solid #3498DB;
  background-color: transparent;
  color: #3498DB;
  padding: .8rem 2.5rem .8rem 2.5rem;
  text-transform: uppercase;
  font-size: 1.2rem;
}
/* About */
.about {
  background-color: #fafafa;
  padding-bottom: 1rem;
}
.about img {
  height: 100%;
  width: 100%;
  max-width: 620px;
  object-fit: cover;
  padding: 1rem;
  margin: 0 auto;
}
.about h2 {
  color: #7F8C8D;
}
.about p {
  font-size: 1rem;
}
.one {
  color: #3498DB;
}
.two {
  color: #2ECC71;
}
.three {
  color: #E74C3C;
}
.four {
  color: #8C13FC;
}
/* Contact */
.contact {
  background-color: #333333;
  min-height: 66px;
  padding: 28px 0 70px 0;
  color: #fff;
}
.contact h4 {
  padding-left: 1rem;
  cursor: pointer;
}
.contact h4 a {
  color: #fff;
}

`

export default function HomePage() {
  return (
    <HomePageStyle>
      {/* <!-- Nav --> */}
      <nav id="nav">
        <ul class="container">
          <li><a href="#top" class="active">Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="hero">
        <div class="content">
          <h1>I build beautiful, scalable products that <span>make people's lives better.</span></h1>
          <p>Currently building Welcome.org, and advising <a target="blank" href="https://www.gofetch.it/">GoFetchIt</a>.</p>
          <p>Previously bootstrapped <a target="blank" href="https://followupedge.com">FollowupEdge</a> to 50k MRR and an acquisition.</p>
        </div>
      </div>
      <div class="portfolio" id="work">
        <div class="content">
          <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1576119764/Raices/Scottie%27s%20Photos/fue.png" alt=""/>
          <div class="spacer"></div>
          <div class="categories">
            <span>SQL /</span>
            <span>Node /</span>
            <span>Javascript /</span>
            <span>Bubble</span>
          </div>
          <h2>FollowupEdge</h2>
          <h4>From my basement to 50k MRR</h4>
          <button>
            <a href="https://www.indiehackers.com/interview/how-we-quit-our-jobs-to-bootstrap-and-grow-our-own-business-16bdf1de2b" target="_blank">
              Check it out
            </a>
          </button>
        </div>
      </div>
      <div class="portfolio" id="work">
        <div class="content">
          <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1576269770/Raices/Scottie%27s%20Photos/raices.png" alt=""/>
          <div class="spacer"></div>
          <div class="categories">
            <span>React /</span>
            <span>GraphQL /</span>
            <span>NextJS /</span>            
          </div>
          <h2>Raíces</h2>
          <h4>WIP - An AirBnB clone</h4>
          <button>
            <a href="https://raices.scottieschneider.com" target="_blank">
              Check it out
            </a>
          </button>
        </div>
      </div>
      <div class="about" id="about">
        <div class="content">
            <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1576106982/Raices/Scottie%27s%20Photos/photoScottie.jpg" alt=""/>
            <h2>Hi! I'm Scottie Schneider - a <span class="one">technical product manager</span>, <span class="two">designer</span>, <span class="three">developer</span>, and <span class="four">mover</span>.</h2>
            <p>I'm a medically retired Army Officer and West Point Graduate. I wasn't the smartest tool in the shed so I graduated with a 2.7 GPA like a boss.</p>
            <p>After freezing off a toe and a half in Alaska, I learned how to dance salsa and discovered a lifelong passion for human movement.</p>
            <p>In search of happiness and my life's purpose I took a one way flight to Medellin, Colombia. There I fell in love with a fiery Paisa, Cristina - now my wife. We have two very spoiled Yorkies.</p>
            <p>I'm either coding, designing, or at the gym exploring my body's potential for movement with Cristina.</p>
            <h3>Interviews and Articles</h3>
            <ul>
              <li><a target="blank" href="http://sabmgroup.libsyn.com/39-creating-an-automated-lead-generation-system-for-your-business-with-scottie-schneider-usma-09">Service Academy Podcast</a></li>
              <li><a target="blank" href="https://www.indiehackers.com/interview/how-we-quit-our-jobs-to-bootstrap-and-grow-our-own-business-16bdf1de2b">Indiehackers Interview - building FollowupEdge</a></li>
            </ul>
        </div>
      </div>
      <div class="contact" id="contact">
        <h4>Let's work together! -- <a href="mailto:hello@scottieschneider.com">hello@scottieschneider.com</a></h4>
      </div>
    </HomePageStyle>
  );
}
