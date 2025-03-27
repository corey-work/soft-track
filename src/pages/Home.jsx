import React from 'react'
import Hero from '../components/Hero'
import Information from '../components/Information'
import Display from '../components/Display'
import CallToAction from '../components/CallToAction'
import Banner from '../components/Banner'
import News from '../components/News'



const Home = () => {
  return (
    <div>
      <Hero />
      <Information />
      <Display />
      <CallToAction />
      <Banner>Learn about RMS</Banner>
      <News />
    </div>
  )
}

export default Home
