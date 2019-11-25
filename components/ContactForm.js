import React, { Component } from 'react';
import styled from 'styled-components';

const ContactFormStyle = styled.div`
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

class ContactForm extends Component {

  state = {
    name: "",
    phone: "",
    email: "",
    message: ""
  }

  render() {
    return (
      <ContactFormStyle>
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
      </ContactFormStyle>
    )
  }
}

export default ContactForm;

