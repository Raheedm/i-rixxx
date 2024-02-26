import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import './fonts.css';
import './App.css';
import TeamRegistration from './Teams/TeamRegsitration';
import bgvideo2 from './assets/irixbg3.mp4';
import HomeNav from './HomeNav';
import ToastBar from './components/Toast/ToastBar';
import Footer from './components/footer';
import Home from './Home';
import Events from './Events/Events';
import Technical from './Events/Technical';
import Navbar from './navbar';
import bgimg from './assets/backgroundimg.png';
import NonTechnical from './Events/NonTechnical';
import Webathon from './AllEvents/webathon'
import bg3 from './assets/irix-bg.mov'
import BlindCoding from './AllEvents/Blind Coding';
import CodewithC from './AllEvents/Code with C';
import CSSBattle from './AllEvents/CSS Battle';
import Debate from './AllEvents/Debate';
import Debugging from './AllEvents/Debugging';
import FastestTyping from './AllEvents/Fastest Typing';
import IrixIconic from './AllEvents/I-rix Iconic';
import MemeMaking from './AllEvents/Meme Making';
import MusicMixing from './AllEvents/Music Mixing';
import PCBuilding from './AllEvents/PC Building';
import Photography from './AllEvents/Photography';
import PitchDeck from './AllEvents/Pitch Deck';
import Quiz from './AllEvents/Quiz';
import IceBreaker from './AllEvents/icebreaker';
import ReelMaking from './AllEvents/Reel Making';
import SQL from './AllEvents/SQL';
import TechGlam from './AllEvents/Tech-Glam';
import TreasureHunt from './AllEvents/Treasure Hunt';
import Web from './AllEvents/web'
import ByteQuest from './AllEvents/Byte Quest'
import LogoMaking from './AllEvents/LogoMaking';
import Gaming from './Events/Gaming';
import BGMI from './AllEvents/BGMI';
import Valorant from './AllEvents/Valorant'
import EventRegistrationForm from './Teams/EventRegistrationForm';
import PartnersPage from './PartnersPage';
import About from './About';

function App() {
  const [open, setOpen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const videoRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleVideoTimeUpdate = () => {
    const { current: video } = videoRef;
    const endThreshold = 0.1; // Percentage of video duration to trigger loop

    if (video && video.currentTime > video.duration - endThreshold) {
      video.currentTime = 0; // Restart video from the beginning
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Main container */}
        { <video
          className="videoTag"
          autoPlay
          loop
          muted
          onTimeUpdate={handleVideoTimeUpdate} // Handle video time update
          ref={videoRef} // Reference to the video element
        >
          <source src={bg3} type="video/mp4" />
        </video> }
        {/* <div className="text-overlay">
  <span className="big-text">MARCH</span><br />
  <span className="small-text">1<sup>st</sup> &amp; 2<sup>nd</sup></span>
</div> */}

        {/* <img src={bgimg} alt="bgvideo" className="videoTag" /> */}
        <div
          className="nav1"
          style={{ minHeight: '100vh', height: '100%', opacity: open ? '0.5' : '' }}
        >
          {/* Navbar */}
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HomeNav />
                    <Home
                      open={open}
                      setOpen={setOpen}
                      handleOpen={handleOpen}
                      handleClose={handleClose}
                      inProp={inProp}
                      setInProp={setInProp}
                    />
                    {/* <Navbar/> */}
                  </>
                }
              />
              <Route
                path="/Reg"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <EventRegistrationForm/>
                   
                  </>
                }
              />
              <Route
                path="/Gaming"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Gaming/>
                   
                  </>
                }
              />
              <Route
                path="/Events"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Events/>
                   
                  </>
                }
              />
              
              <Route
                path="/technical"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Technical/>
                   
                  </>
                }
              />
              <Route
                path="/nontechnical"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <NonTechnical/>
                   
                  </>
                }
              />
              <Route
                path="/Webathon"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Webathon/>
                   
                  </>
                }
              />
              <Route
                path="/BlindCoding"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <BlindCoding/>
                   
                  </>
                }
              />
              <Route
                path="/CodeWithC"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <CodewithC/>
                   
                  </>
                }
              />
              <Route
                path="/CSSBattle"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <CSSBattle/>
                   
                  </>
                }
              />
              <Route
                path="/Debate"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Debate/>
                   
                  </>
                }
              />
              <Route
                path="/Debugging"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Debugging/>
                   
                  </>
                }
              />
              <Route
                path="/FastestTyping"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <FastestTyping/>
                   
                  </>
                }
              />
              <Route
                path="/IrixIconic"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <IrixIconic/>
                   
                  </>
                }
              />
              <Route
                path="/MemeMaking"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <MemeMaking/>
                   
                  </>
                }
              />
              <Route
                path="/MusicMixing"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <MusicMixing/>
                   
                  </>
                }
              />
              <Route
                path="/IceBreaker"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <IceBreaker/>
                   
                  </>
                }
              />
              <Route
                path="/PCBuilding"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <PCBuilding/>
                   
                  </>
                }
              />
              <Route
                path="/Photography"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Photography/>
                   
                  </>
                }
              />
              <Route
                path="/PitchDeck"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <PitchDeck/>
                   
                  </>
                }
              />
              <Route
                path="/Quiz"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Quiz/>
                   
                  </>
                }
              />
              <Route
                path="/ReelMaking"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <ReelMaking/>
                   
                  </>
                }
              />
              <Route
                path="/TechGlam"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <TechGlam/>
                   
                  </>
                }
              />
              <Route
                path="/SQL"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <SQL/>
                   
                  </>
                }
              />
              <Route
                path="/TreasureHunt"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <TreasureHunt/>
                   
                  </>
                }
              />
              <Route
                path="/web"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Web/>
                   
                  </>
                }
              />
              <Route
                path="/ByteQuest"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <ByteQuest/>
                   
                  </>
                }
              />
              <Route
                path="/LogoMaking"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <LogoMaking/>
                   
                  </>
                }
              />
              <Route
                path="/BGMI"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <BGMI/>
                   
                  </>
                }
              />
              <Route
                path="/Valorant"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <Valorant/>
                   
                  </>
                }
              />
              <Route
                path="/Reg"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <EventRegistrationForm/>
                   
                  </>
                }
              />
              <Route
                path="/Partners"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <PartnersPage />
                   
                  </>
                }
              />
              <Route
                path="/About"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <About/>
                   
                  </>
                }
              />

            </Routes>
          </BrowserRouter>
          {/* Toast messages */}
          <ToastBar />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
