import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Faq.css'; // Import CSS file for styling

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await axios.get('http://localhost:2000/questions');
      setFaqs(response.data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <h2>{faq.question}</h2>
              <span className={`faq-arrow ${activeFaqIndex === index ? 'open' : ''}`}>&#x25BC;</span>
            </div>
            {activeFaqIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;