import React, { Component } from 'react';
import styled from 'styled-components';

const ContactFormStyle = styled.div`
  form {
    background-color: ${props => props.theme.grey};
    padding: 2rem;
    border-radius: 1rem;
  }
  .field {
    display: flex;
    margin-bottom: .8rem;
    position: relative;
    flex: 0 0 calc(50% - 1rem);     
    label {
      position: absolute;
      top: .8rem;
      left: 1rem;
      font-size: .9rem;
      transition: font-size .2s ease, top .2s ease;      
    }
  }
  input, textarea {
    padding-left: .9rem;
    background: transparent;
    font-size: 1rem;
    padding-top: 1.2rem;
  }
  textarea:focus + label, 
  input:focus +label,
  .filled +label {
    font-size: .6rem;
    top: .3rem;
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
      background-color: #fff;
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
    height: 3rem;
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
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <ContactFormStyle>
        <h2>Contact Me</h2>
        <form action="#">
          <div className="form-container">
            <div className="field">              
              <input 
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className={this.state.name !== "" ? "filled" : null}
                type="text" 
              />
              <label>Name</label>
            </div>
            <div className="field">              
              <input 
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                className={this.state.phone !== "" ? "filled" : null}
                type="tel" 
              />
              <label for="">Phone</label>
            </div>
            <div className="field w-100">            
              <input 
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className={this.state.email !== "" ? "filled" : null}
                type="mail" 
              />
              <label for="">Email</label>
            </div>
            <div className="field w-100">              
              <textarea 
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                cols="30" rows="3"
                className={this.state.message !== "" ? "filled" : null}
              >                
              </textarea>
              <label for="">Message</label>
            </div>
          </div>
          <div className="submit-form">
            <input type="submit" className="button" value="Send"/>
          </div>
        </form>
      </ContactFormStyle>
    )
  }
}

export default ContactForm;

