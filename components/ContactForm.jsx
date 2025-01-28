// import React from 'react'

// const ContactForm = () => {
//   return (
//     <div>
//       <h1>Contact Us</h1>

//     </div>
//   )
// }

// export default ContactForm

"use client";

import { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending data to an API or email
    console.log(formData);
  };

  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='w-full md:w-6/12 mb-10 p-5'>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className=' md:w-1/2'>
            {/* <label htmlFor="firstname">First Name:</label> */}
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              placeholder='First Name'
              className='p-2 rounded-md w-full outline-none'
            />
          </div>

          <div className='w-1/2'>
            {/* <label htmlFor="lastname">Last Name:</label> */}
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              placeholder='Last Name'
              className='p-2 rounded-md w-full outline-none'
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className='w-1/2'>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Email'
              className='p-2 rounded-md w-full outline-none'
            />
          </div>

          <div className='w-1/2'>
            {/* <label htmlFor="phone">Phone Number:</label> */}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone Number'
              className='p-2 rounded-md w-full outline-none'
            />
          </div>
        </div>

        <div className='mb-4'>
          {/* <label htmlFor="message">Message:</label> */}
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Message'
            className='p-2 rounded-md w-full outline-none'
          ></textarea>
        </div>

        {/* <button type="submit">Submit</button> */}
        <Button text={`Submit`} className="w-36  bg-theme text-white hover:bg-white hover:text-theme transition-all duration-200" />


      </form>
    </div>
  );
};

export default ContactForm;
