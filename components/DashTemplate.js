import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRabbit as fasFaRabbit } from '@fortawesome/pro-solid-svg-icons'
import { faMapMarkerAlt as fasMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons'
import { faPencilRuler as farPencilRuler } from '@fortawesome/pro-regular-svg-icons';
import { faCoffeeTogo as farCoffeeTogo } from '@fortawesome/pro-regular-svg-icons';
import { faFrostyHead as farFrostyHead } from '@fortawesome/pro-regular-svg-icons';
import { faRabbit as farFaRabbit } from '@fortawesome/pro-regular-svg-icons';
import { faRabbit as falFaRabbit } from '@fortawesome/pro-light-svg-icons';
import { faRabbit as fadFaRabbit } from '@fortawesome/pro-duotone-svg-icons';
import { fromPromise } from 'apollo-link';

const DashTemplateStyle = styled.body`
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
  .button {
    background-color: ${props => props.theme.secondary};
    padding: .5rem 3rem;
    border-radius: 5px;
    display: inline-block;
    margin-top: .5rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    border: none;
    color: ${props => props.theme.white};
    transition: background-color .3s ease;
    cursor: pointer;
  }
  .button:hover {
    background-color: rgb(1, 123, 136);
  }
  .container {
    margin: 2rem auto 3rem auto;
    max-width: 1200px;
    padding: 2rem;
    background-color: ${props => props.theme.main};
    -webkit-box-shadow: 0px 4px 12px -1px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 4px 12px -1px rgba(0,0,0,0.6);
    box-shadow: 0px 4px 12px -1px rgba(0,0,0,0.6);
    border-radius: 1rem;

  }

  h2, h3 {
    text-align: center;
  }

  h3 {
    color: ${props => props.theme.secondary};
    font-weight: 400;
    font-size: 1.6rem;
  }
  p {
    line-height: 2;
  }
  .main-navigation {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    .main-navigation {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .main-navigation a {
    color: ${props => props.theme.dark};
    text-decoration: none;
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
  }

  @media (min-width: 768px) {
    .main-navigation a {
      margin-bottom: 0;
    }
  }
  .hero {
    height: 450px;
    background-image: url(https://res.cloudinary.com/dvqw5uhrr/image/upload/v1574288903/Raices/Portfolio%20Site%20%28ScottieSchneider.com%29/hero.jpg);
    /* background-image: url(../img/hero.jpg); */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero::after {
    content: '';
    background-color: rgba(0,0,0, .7);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
  .hero-content {
    color: ${props => props.theme.white};
    position: relative;
    z-index: 1;
    text-align: center;
    svg {
      color: ${props => props.theme.primary};
    }
  }
  .hero-content i {
    font-size: 3rem;
    color: ${props => props.theme.main};
  }
  @media (min-width: 768px) {
    .services-container {
      display: flex;
      justify-content: space-between;
    }
    .service {
      flex: 0 0 calc(33.3% - 1rem);
    }
  }
  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icons {
    height: 100px;
    width: 100px;
    display: flex;
    background-color: ${props => props.theme.primary};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  .icons i {
    font-size: 3rem;
  }

  form {
    background-color: ${props => props.theme.grey};
    padding: 2rem;
    border-radius: 1rem;
  }
  @media (min-width: 768px){
    form {
      max-width: 800px;
      margin: 0 auto;
    }
    .form-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .field {
      flex: 0 0 calc(50% - 1rem);
    }
  }
  .field {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
  }
  .field label {
    flex: 0 0 90px;
    color: ${props => props.theme.main};
  }
  .field input[type="text"],
  .field input[type="tel"],
  .field input[type="mail"],
  .field textarea {
    flex: 1;
    height: 2.4rem;
  }
  .w-100 {
    flex: 0 0 100%;
  }
  .field textarea {
    height: 4rem;
  }
  .submit-form {
    display: flex;
    justify-content: flex-end;
  }
`

export default function DashTemplate() {
  return (
    <DashTemplateStyle>
      <nav class="main-navigation">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Clients & Work</a>
        <a href="#">Contact Me</a>
      </nav>
      <div class="hero">
        <div class="hero-content">
          <h1>Senior Product Developer and Designer</h1>
          <p><FontAwesomeIcon icon={fasMapMarkerAlt} />Medellin, Colombia/United States</p>
          <a class="button" href="#">Contact Me Here</a>
        </div>
      </div>
      <div class="container">
          <main class="services">
            <h2>My Services</h2>
            <div class="services-container">
                <div class="service">
                  <h3>Product Design</h3>
                  <div class="icons">
                      {/* <i class="far fa-pencil-ruler"></i> */}
                      <FontAwesomeIcon icon={farPencilRuler} />
                  </div>
                  <p>
                    I design in Sketch, translate those designs into workable prototypes, create design libraries for production ready code in Storybook, and create NPM/Yarn addable components with bit.dev.
                  </p>
                </div>
                <div class="service"> 
                  <h3>App Development</h3>
                  <div class="icons">
                      {/* <i class="far fa-coffee-togo"></i> */}
                      <FontAwesomeIcon icon={farCoffeeTogo} />
                  </div>
                  <p>
                    What I design, I can code - I focus on Progressive Web Apps. I'm strongest developing in Javascript. My favorite stack is NextJS, React, Node, Apollo Client, Prisma, GraphQL - hosted on Now.dev or Heroku.
                  </p>
                </div>
                <div class="service">
                  <h3>Product Management</h3>
                  <div class="icons">
                      {/* <i class="far fa-frosty-head"></i> */}
                      <FontAwesomeIcon icon={farFrostyHead} />
                  </div>
                  <p>
                    I can design, code, and talk to people (yay!) so I'm ideal as a force multiplier, leading teams to build great products and scalable businesses.
                  </p>
                </div>
            </div>
          </main>
          <section 
            class="contact"
            id="contact"
          >
            <h2>Contact Me</h2>
            <form action="#">
              <div class="form-container">
                <div class="field">
                  <label for="">Name:</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                  />
                </div>
                <div class="field">
                  <label for="">Phone:</label>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                  />
                </div>
                <div class="field w-100">
                  <label for="">Email:</label>
                  <input 
                    type="mail" 
                    placeholder="Email" 
                  />
                </div>
                <div class="field w-100">
                  <label for="">Message:</label>
                  <textarea cols="30" rows="3"></textarea>
                </div>
              </div>
              <div class="submit-form">
                <input type="submit" class="button" value="Send"/>
              </div>
            </form>
          </section>
        </div>
    </DashTemplateStyle>
  );
}
