import React, { useState } from 'react';
import styles from '../../css-modules/Contact.module.css';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to handle animation trigger

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_znnydtr',    // Replace with your actual EmailJS service ID
        'template_q5aqllc',   // Replace with your actual EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        },
        'DZegiHqJ61p7foj2u'     // Replace with your actual EmailJS public key
      );

      console.log('Email successfully sent!', result.text);
      setIsSubmitted(true); // Trigger the animation

      setFormData({ name: '', email: '', mobile: '', message: '' });
      // Clear all history entries before success
    navigate('/', { replace: true });

    // Then push success
    setTimeout(() => {
      navigate('/success', {
        state: { fromContact: true },
        replace: true,
      });
    }, 0); 
      
      // Reset the animation after some time (if desired)
      //setTimeout(() => setIsSubmitted(false), 3000); // Hide animation after 3 seconds

    } catch (error) {
      console.error('Failed to send message ❌:', error);
      // Optionally handle errors here (like showing an error message)
    }
  };

  return (
    <div className={styles.contactSection}>
      <h2>Contact Me</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Type some message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
