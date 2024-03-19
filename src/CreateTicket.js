import React, { useState } from 'react';
import axios from 'axios';

const CreateTicket = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('question');
  const [description, setDescription] = useState('');
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

  const handleTermsAgreedChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !description || !termsAgreed) {
      alert('Please fill in all required fields and agree to the terms.');
      return;
    }

    try {
      await axios.post('http://localhost:5002/api/tickets', {
        title,
        subject,
        description,
        // image: null, // Remove image from the payload
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
        {/* Image upload field removed */}
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
