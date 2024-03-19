import React, { useState } from 'react';
import axios from 'axios';

const CreateTicket = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('question');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleTermsAgreedChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !description || !termsAgreed) {
      alert('Please fill in all required fields and agree to the terms.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('subject', subject);
    formData.append('description', description);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/tickets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Ticket created successfully!');
      // Optionally, you can redirect the user or perform other actions upon successful submission
    } catch (error) {
      console.error('Error creating ticket:', error);
      alert('Failed to create ticket. Please try again later.');
      // Handle errors accordingly, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Create New Ticket</h2>
      {/* Form for creating new ticket */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} placeholder="Enter title..." required />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <select id="subject" value={subject} onChange={handleSubjectChange}>
            <option value="question">Question</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} rows="4" placeholder="Enter description..." required />
        </div>
        <div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <input type="checkbox" id="terms" checked={termsAgreed} onChange={handleTermsAgreedChange} required />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Create Ticket</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;
