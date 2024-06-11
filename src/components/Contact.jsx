import React, { useState } from 'react';


const Contact = () => {
  
  const [from_name,setName]=useState('');
  const [message,setMessege]=useState('');
  const [user_email,setEmail]=useState('');
  const formData= {from_name,user_email,message,to_name:'Ashafque Ahmad'};

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_p6dmrlx', 'template_vgqoimi', formData, 'KRkvJ2cNa5CrzqHsh')
      .then((result) => {
          alert('Message sent successfully');
      }, (error) => {
          console.error('There was an error sending the message!', error);
      });
  };

  return (
    
    <>
    <section id="contact" className="my-5">
      <div className="container">
        <h2 className="text-center hollow-text">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="formName"
              name="name"
              value={from_name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formEmail" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              name="email"
              value={user_email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formMessage" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="formMessage"
              name="message"
              rows="3"
              value={message}
              onChange={(e)=>setMessege(e.target.value)}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section></>
  );
};

export default Contact;
