import React from 'react'
import SportsImg from '../images/sportsimg.jpg'
import PoliticsImg from '../images/politicsimg.jpg'
import EntertainmentImg from '../images/entertainmentimg.jpg'
import HistoricalImg from '../images/historicalimg.jpg'
import LifestyleImg from '../images/lifestyleimg.jpg'
import MusicImg from '../images/musicimg.jpg'
import PostContent from './PostContent'
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <>
      <div className="categoryCard">
        <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Top Categories</h1>
        <div className="cardCat">
          <div className="cardC">
            <img src={SportsImg} alt="img" />
            <div className="cardCDesc">
              <Link to='/categories/sports' style={{ textDecoration: 'none' }}><h1>Sports</h1></Link>
              <p>Sports refers to physical activities or games that involve skill, competition, and organized rules. It is a broad term that encompasses a wide range of activities, including team sports such as football, basketball, and soccer, as well as individual sports like swimming, tennis, and athletics.</p>
            </div>
          </div>
          <div className="cardC">
            <img src={EntertainmentImg} alt="img" />
            <div className="cardCDesc">
              <Link to='/categories/entertainment' style={{ textDecoration: 'none' }}><h1>Entertainment</h1></Link>
              <p>Entertainment refers to activities, performances, or experiences that are designed to provide enjoyment, amusement, or relaxation. It encompasses a wide range of forms, including movies, television shows, music, theater, sports events, gaming, and various forms of live performances.</p>
            </div>
          </div>
          <div className="cardC">
            <img src={MusicImg} alt="img" />
            <div className="cardCDesc">
              <Link to='/categories/music' style={{ textDecoration: 'none' }}><h1>Music</h1></Link>
              <p>Music is a form of artistic expression that uses rhythm, melody, and harmony to create sounds that evoke emotions and communicate ideas. It is a universal language that transcends cultural boundaries, connecting people and evoking powerful emotions. Music has the power to entertain.</p>
            </div>
          </div>
          <div className="cardC">
            <img src={LifestyleImg} alt="img" />
            <div className="cardCDesc">
              <Link to='/categories/lifestyle' style={{ textDecoration: 'none' }}><h1>LifeStyle</h1></Link>
              <p>Lifestyle refers to the way individuals or groups of people choose to live and conduct their daily lives. It encompasses their attitudes, behaviors, habits, and choices in various aspects, including personal preferences, social interactions, work-life balance, health and wellness, leisure activities, and consumption patterns. Adopting a healthy and balanced lifestyle is often emphasized, focusing on physical and mental well-being, self-care, positive relationships, and fulfilling experiences. </p>
            </div>
          </div>
          <div className="cardC">
            <img src={HistoricalImg} alt="img" />
            <div className="cardCDesc">
              <Link to='/categories/historical' style={{ textDecoration: 'none' }}><h1>Historical</h1></Link>
              <p>Historical refers to events, people, or artifacts from the past that have significant historical importance or relevance. It involves the study and interpretation of past events, cultures, civilizations, and their impact on the present. Historical events and figures shape our understanding of the present and provide valuable insights into the evolution of human civilization. By studying history, we can gain a deeper appreciation for our roots, learn from past mistakes, and make informed decisions for the future.</p>
            </div>
          </div>
          <div className="cardC">
            <img src={PoliticsImg} alt="img" />
            <div className="cardCDesc">
              <Link to='/categories/politics' style={{ textDecoration: 'none' }}><h1>Politics</h1></Link>
              <p>Politics refers to the activities, processes, and policies involved in governing and managing a society or a country. It encompasses the distribution of power, decision-making, and the formulation of laws and regulations that guide a nation's affairs. Politics involves the interaction between individuals, political parties, governments, and other institutions in order to establish and implement policies that shape the social, economic, personal, and cultural aspects of a community. </p>
            </div>
          </div>
        </div>
      </div>
      <PostContent />
    </>
  )
}

export default Categories