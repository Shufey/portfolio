import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      style: { backgroundColor: '#6B46C1', color: '#ffffff' },
    });
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='contact-form-content w-full'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div className='name-container flex items-center gap-6'>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder='First Name'
            className='flex-1 w-full text-sm text-white bg-[#130f2a] rounded-lg border-[1.5px] border-[#6751b9] p-4'
            required
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder='Last Name'
            className='flex-1 w-full text-sm text-white bg-[#130f2a] rounded-lg border-[1.5px] border-[#6751b9] p-4'
            required
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='flex-1 w-full text-sm text-white bg-[#130f2a] rounded-lg border-[1.5px] border-[#6751b9] p-4'
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
          rows={3}
          className='flex-1 w-full text-sm text-white bg-[#130f2a] rounded-lg border-[1.5px] border-[#6751b9] p-4'
          required
        />

        <button
          type="submit"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-[0.6rem] px-[2rem] text-center"
        >
          SEND
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
