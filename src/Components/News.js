import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/news', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
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
                  <Link to={`/news/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h5 className="card-title">{item.main_title}</h5>
                  </Link>
                  <p className="card-text">{item.main_content}</p>
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