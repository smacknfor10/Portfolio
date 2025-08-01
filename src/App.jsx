import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { ToastContainer} from 'react-toastify';

const App = () => {

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App