import React from "react";
import "./NewsCard.css";

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      {article.image_url && (
        <img 
          src={article.image_url} 
          alt={article.title} 
          className="news-image"
        />
      )}
      <h2 className="news-title">{article.title}</h2>
      <p className="news-description">
        {article.description || "No description available."}
      </p>
      <p className="news-date">
        Published: {article.pubDate ? new Date(article.pubDate).toLocaleString() : "N/A"}
      </p>
      {article.link && (
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-link">
          Read more →
        </a>
      )}
    </div>
  );
};

export default NewsCard;

