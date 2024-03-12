// News.js
import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch news data from backend
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:5000/news'); // Adjust URL if necessary
      if (!response.ok) {
        throw new Error('Failed to fetch news data');
      }
      const data = await response.json();
      setNews(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error.message);
      setLoading(false);
    }
  };

  return (
    <div className="news-container">
      <h2 className="mb-4">Latest News</h2>
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          news.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.main_title}</h5>
                  <p className="card-text">{item.main_content}</p>
                  <h6 className="card-subtitle mb-2 text-muted">{item.sub_title1}</h6>
                  <p className="card-text">{item.sub_content1}</p>
                  <p className="card-text">{item.sub_content2}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
