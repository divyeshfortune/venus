import Blog from '@/components/Blog'
import Contactform from '@/components/Contactform'
import Counter from '@/components/Counter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Progresswork from '@/components/Progresswork'
import Servicescard from '@/components/Servicescard'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Counter/>
      <Progresswork/>
      <Servicescard/>
      <Portfolio/>
      <Testimonial/>
      <Blog/>
      <Contactform/>
      <Footer/>
    </div>
  )
}

export default page