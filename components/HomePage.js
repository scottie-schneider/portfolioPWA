import React from 'react';
import styled from 'styled-components';
// push
const HomePageStyle = styled.div`
  * {
  font-family: 'Fira Sans', sans-serif;
}
.intrinsic-container iframe {
    min-height: 300px;
    min-width: 50vh;
    width: 50%;
    height: 100%;
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
a button {
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
.portfolio a {
  border: 1px solid red;
  margin: 3rem auto 2rem auto;
  border: .05rem solid #3498DB;
  background-color: transparent;
  color: #3498DB;
  padding: .8rem 2.5rem .8rem 2.5rem;
  text-transform: uppercase;
  font-size: 1.2rem;  
  max-width: 300px;
}
.portfolio a.code {
  border: none;
  margin-top: 1rem;
  color: #7F8C8D;
  :hover {
    text-decoration: underline;
  }
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
iframe {
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
            <a href="https://www.indiehackers.com/interview/how-we-quit-our-jobs-to-bootstrap-and-grow-our-own-business-16bdf1de2b" target="_blank"> 
              Read the story            
            </a>
        </div>
      </div>
      <div class="portfolio" id="">
        <div class="content">
          <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1578362822/Raices/Portfolio%20Site%20%28ScottieSchneider.com%29/Social_App.png" alt=""/>
          <div class="spacer"></div>
          <div class="categories">
            <span>React & NextJS /</span>
            <span>Node & Express /</span>
            <span>MongoDB /</span>
            <span>Material Design</span>
          </div>
          <h2>DevConnect</h2>
          <h4>A social network for devs and designers.</h4>
            <a href="https://social-media-app-nextjs.herokuapp.com/" target="_blank"> 
              Check it out             
            </a>
            <a className="code" href="https://github.com/scottie-schneider/social_media_app" target="_blank">
              See the code
            </a>
        </div>
      </div>
      <div class="portfolio" id="work">
        <div class="content">
        <div class="intrinsic-container intrinsic-container-16x9">
            <iframe src="https://www.youtube.com/embed/teNHAeTtots" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>        
          <div class="spacer"></div>
          <div class="categories">
            <span>React & NextJS /</span>
            <span>Node & Express /</span>
            <span>MongoDB /</span>
            <span>Progressive Web App</span>
          </div>
          <h2>Puerta</h2>
          <h4>Uber for real estate. I led a team of 6 other developers (and one scrappy UX/UI designer) for 30 hours to produce Puerta.</h4>
          <a className="code" href="https://github.com/PuertaApp/puertaApp" target="_blank">
              See the code
            </a>
        </div>
      </div>
      <div class="portfolio" id="">
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
          <a href="https://raices.scottieschneider.com" target="_blank"> 
              Check it out             
            </a>
            <a className="code" href="https://github.com/scottie-schneider/raices" target="_blank">
              See the code
            </a>
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
