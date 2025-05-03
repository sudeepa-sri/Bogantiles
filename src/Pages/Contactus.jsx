// import React, { useState } from 'react';
// import './Contactus.css';

// function Contactus() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [successMessage, setSuccessMessage] = useState(''); 

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send form data to backend to send the email
//     fetch('http://localhost:5000/api/contact/send-email', {

//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Email sent successfully:', data);
//         setFormData({ name: '', email: '', message: '' });
//         setSuccessMessage('Message sent successfully!'); 
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//         setSuccessMessage('Failed to send message. Please try again later.'); 
//       });
//   };

//   return (
//     <div className="contactus-container">
//       <div className="contactus-card">
//         {/* Left Side: Form */}
//         <div className="contactus-form">
//           <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
//           <form onSubmit={handleSubmit} className="form-fields">
//             <div className="form-row">
//               <div className="form-input">
//                 <label htmlFor="name">Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-input">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-input">
//                 <label htmlFor="message">Message:</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//             </div>

//             <div className="submit-button">
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="contactus-map">
//           <iframe
//             title="Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.530162894876!2d78.01954527481067!3d11.148327289023971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd3364967ffd3%3A0xe0a34597728ae000!2sBogan%20Tiles%20%26%20Interiors!5e0!3m2!1sen!2sin!4v1745383717749!5m2!1sen!2sin"
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Contactus;

import React, { useState, useEffect } from 'react';
import './Contactus.css';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/contact/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Email sent successfully:', data);
        setFormData({ name: '', email: '', message: '' });
        setSuccessMessage('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSuccessMessage('Failed to send message. Please try again later.');
      });
  };

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="contactus-container">
      <div className="contactus-card">
        {/* Left Side: Form */}
        <div className="contactus-form">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="form-fields">
            <div className="form-row">
              <div className="form-input">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-input">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>

            <div className="submit-button">
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
              {successMessage && (
                <p
                  className={`mt-4 font-semibold transition-opacity duration-300 ${
                    successMessage.includes('Failed') ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {successMessage}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Right Side: Map */}
        <div className="contactus-map">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.530162894876!2d78.01954527481067!3d11.148327289023971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd3364967ffd3%3A0xe0a34597728ae000!2sBogan%20Tiles%20%26%20Interiors!5e0!3m2!1sen!2sin!4v1745383717749!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
