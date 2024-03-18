import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/news/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };
    fetchNews();
  }, [id]);

  if (!news) {
    return <p>Loading...</p>;
  }

  return (
    <div className="news-detail-container">
      {/* Render the full news content */}
      <h2>{news.main_title}</h2>
      <p>{news.main_content}</p>
      <h3>{news.sub_title1}</h3>
      <p>{news.sub_content1}</p>
    </div>
  );
};

export default NewsDetail;