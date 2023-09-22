import React from "react";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from './components/skills/skills'
import Works from './components/Works/works'
import Contact from './components/contact/contact'
import Footer from './components/Footer/footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
