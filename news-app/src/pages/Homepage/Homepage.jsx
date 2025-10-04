import React from 'react'


import './Homepage.css'
import Navbar from '../../components/Navbar'
import NewsCard from '../../components/NewsCard'
import Hero from '../../components/hero'
import Virat from '../../assets/Viratkohli.jpeg'
import Ai from '../../assets/Ai startup.jpeg'
import Electionupdates from '../../assets/Electionupdates.jpg'
import Stockmarket from '../../assets/Stockmarket.jpeg'
import Climateaction from '../../assets/ClimateChange.jpeg'
import Bolly from '../../assets/Bollybuzz.jpeg'
import Space from '../../assets/Space.jpeg'
import Olympics from '../../assets/Olympics.avif'






const Homepage = () => {
   const news_list = [
    {
      heading: "Kohli back",
      category: "Sports",
      para: "Kohli is back on the ground",
      summary: "Detailed analysis of his comeback...",
      image: Virat
    },
    {
      heading: "Tech Boom",
      category: "Technology",
      para: "AI startups are booming worldwide",
      summary: "Investments are flowing rapidly...",
      image: Ai
    },
    {
      heading: "Election Updates",
      category: "Politics",
      para: "Latest results from major cities",
      summary: "Counting still ongoing in several areas...",
      image: Electionupdates
    },
    {
      heading: "Global Markets",
      category: "Business",
      para: "Stocks hit new highs",
      summary: "Investors optimistic despite inflation worries...",
      image: Stockmarket
    },
    {
      heading: "Climate Action",
      category: "World",
      para: "New agreement signed at UN",
      summary: "Leaders pledge for green energy...",
      image: Climateaction
    },
    {
      heading: "Bollywood Buzz",
      category: "Entertainment",
      para: "New blockbuster announced",
      summary: "Fans are already hyped for the release...",
      image: Bolly
    },
    {
      heading: "Space Exploration",
      category: "Science",
      para: "New mission to Mars planned",
      summary: "Scientists are optimistic about success...",
      image: Space
    },
    {
      heading: "Olympics 2025",
      category: "Sports",
      para: "Preparations in full swing",
      summary: "The games promise to be bigger than ever...",
      image: Olympics
    }
  ];
  return (
    <>
    
    
    <Navbar></Navbar>
    <Hero></Hero>

     <div className="news-container">
      {news_list.map((news, index) => (
        <NewsCard
          key={index}
          heading={news.heading}
          category={news.category}
          para={news.para}
          summary={news.summary}
          image={news.image}
        />
      ))}
    </div>
    
    </>
  )
}

export default Homepage