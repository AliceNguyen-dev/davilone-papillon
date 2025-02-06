import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your EmailJS service ID, template ID, and Public Key
      const serviceId = 'service_oqumer1';
      const templateId = 'template_bab4im3';
      const publicKey = 'gtf8A5-3P1joZjbMG';
  
      // Create a new object that contains dynamic template params
      const templateParams = {
        from_email: email,
        message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response);
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    };
  return (
    <div>
      <div className="box-cont-1">

        <div className="tab-ct-grid">
            {/* bannière contact */}
        </div>

        <div className="tab-box--1">
            <p className="tab-cont-h">Service Client : En quoi puis-je vous aider ?</p>
        </div>

        <div className="box-chmp-tab">
        <form onSubmit={handleSubmit} className="emailForm formApp --form-control --card --flex-center --dir-column">

          <div className='form-outline mb-4 tab-info'>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>


          <div className='form-outline mb-4 tab-info'>
            <textarea placeholder='Message' cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="--btn --btn-primary btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-contact">
              Envoyer le message
            </button>
          </div>
        </form>
        </div>




      </div>
    </div>
  );
}

export default Contact;