import React from 'react'
import axios from "axios";

import { useState, useEffect } from 'react';

import './Homepage.css'
import Navbar from '../../components/Navbar'
import NewsCard from '../../components/NewsCard'
import Hero from '../../components/Hero'
import Footer from'../../components/Footer'



const Homepage = () => {
    const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsdata.io/api/1/news?apikey=pub_537d49f322e04ffaa532ec2b235f062e&country=in"
        );
        setArticles(response.data.results); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  return (
    <>
    
    
    <Navbar></Navbar>
    <Hero></Hero>
   <div className='news-container'>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>

    <Footer></Footer>
    
    </>
  )
}

export default Homepage