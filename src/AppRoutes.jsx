import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router'
import About from './components/Navbar-Pages/About'
import App from './App'
import Navbar from './components/Navbar'
import Projects from './components/Navbar-Pages/Projects'
import Contact from './components/Navbar-Pages/Contact'
import SuccessPage from './components/Contact_animation/SuccessPage'

function AppRoutes() {

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        document.body.classList.add("scroll-down");
      } else {
        document.body.classList.remove("scroll-down");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
    <Navbar/>
   <Routes>
     <Route path="/" element={<App/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/projects" element={<Projects/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/success" element={<SuccessPage/>}/>
   </Routes>
   </>
  )
}

export default AppRoutes
