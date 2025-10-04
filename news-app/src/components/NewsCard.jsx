import React from "react";
import "./NewsCard.css"; // optional for styling

const NewsCard = ({ heading, category, para, summary, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={heading} className="news-img" />
      <div className="news-content">
        <h2>{heading}</h2>
        <span className="category">{category}</span>
        <p>{para}</p>
        <small>{summary}</small>
      </div>
    </div>
  );
};

export default NewsCard;
