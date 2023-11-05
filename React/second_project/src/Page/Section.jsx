import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import About from './component/About'
import Gallery from './component/Gallery'
import Page_not_found from './component/Page_not_found'
import Student_detials from './component/Student_detials'

function Section() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/stddetails/:std_id" element={<Student_detials/>}/>
        <Route path="/*" element={<Page_not_found/>}/>
        
      </Routes>
  
  )
}

export default Section