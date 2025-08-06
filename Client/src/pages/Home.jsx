import React from 'react'
import Header from '../components/Header.jsx'
import Steps from '../components/Steps.jsx'
import BgSlider from '../components/BgSlider.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Upload from '../components/Upload.jsx'

function Home() {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonial />
      <Upload />
    </div>
  )
}

export default Home