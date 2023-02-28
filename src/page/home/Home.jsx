import React from 'react'
// import sample from '../../image/video/beach-3998.mp4';
import './Home.css';
import About from '../about/About';
import Layout from '../../Layout/Layout';
const Home = () => {
  return ( 
    <>
   <Layout>
   <div className='container home-container'>
    <div className='home'>
    <div className='out-image'>
      <div className='home-2'>
        <h1 className='hello'> hello friend's</h1>
        <p className='Welcome'> Welcome to my web site</p>
      </div>
      <div className='home-image'></div>
    </div>
      
    </div>
    <About/>
    </div>
   </Layout>
    </>
  )
}

export default Home
