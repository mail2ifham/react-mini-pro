import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/randomColor/RandomColor'
import StarRating from './components/starRating/StarRating'
import ImageSlider from './components/imageSlider/ImageSlider'

function App() {

  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* random color Component */}
      {/* <RandomColor/> */}

      {/* star rating */}
      {/* <StarRating/> */}

      {/* image slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}  />
    </>
  )
}

export default App
