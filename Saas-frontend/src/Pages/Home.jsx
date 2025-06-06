import React from 'react'
import Header from '../components/Header'
import BgRemovalSteps from '../components/BgRemovalSteps'
import BgSlider from '../components/BgSlider'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import TryNow from '../components/TryNow'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Outfit']">
        {/* Hero section */}
        <Header/>

        {/* Background Removal steps section  */}
        <BgRemovalSteps/>

        {/*  Background Removal slider section sm */}
        <BgSlider/>

         {/*  Buy credit plan section  */}
         <Pricing/>

          {/*  User Testimonial section  */}
          <Testimonials/>

           {/*  Try Now section  */}
           <TryNow/>

        
      
    </div>
  )
}

export default Home
