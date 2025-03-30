import React from 'react'
import Hero from '../components/Hero'
import Information from '../components/Information'
import Display from '../components/Display'
import CallToAction from '../components/CallToAction'
import Banner from '../components/Banner'
import News from '../components/News'
import NewsLetter from '../components/NewsLetter'
import Solution from '../components/Solution'
import LowerBanner from '../components/LowerBanner'
import PriceCard from '../components/PriceCard'



const Home = () => {
  return (
    <div>
      <Hero />
      <Information />
      <Display />
      <CallToAction />
      <Banner>Learn about RMS</Banner>
      <News />
      <NewsLetter />
      <Solution />
      <LowerBanner />
      <PriceCard />
      
    </div>
  )
}

export default Home
