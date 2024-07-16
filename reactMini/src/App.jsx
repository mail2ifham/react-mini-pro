import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/randomColor/RandomColor'
import StarRating from './components/starRating/StarRating'
import ImageSlider from './components/imageSlider/ImageSlider'
import LoadMoreButton from './components/load-more-data/LoadMoreButton'
import TreeView from "./components/treeView/TreeView"
import menus from './components/treeView/data'
import QRCodeGenerator from './components/qr-code-generator/QRCodeGenerator'

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
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}  /> */}

      {/* load more button */}
      {/* <LoadMoreButton/> */}

      {/* Tree view */}
      {/* <TreeView menu={menus}/> */}

      {/* QR code generator */}
      <QRCodeGenerator/>

    </>
  )
}

export default App
