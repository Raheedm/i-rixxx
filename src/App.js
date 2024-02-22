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
          <source src={bgvideo2} type="video/mp4" />
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
                path="/eventregister"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <TeamRegistration />
                   
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
                path="/navbar"
                element={
                  <>
                    {/* <Header /> */}
                    
                      <navbar>
                        <Navbar/>
                      </navbar>
                   
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
