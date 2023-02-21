import './App.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Intro from "./components/Intro/Intro"
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Works/Work';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact  from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import React from 'react';
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode ? "black": "",
      color:darkMode ? "white": ""
    }}
    
    
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
