import React, { useState,useEffect } from 'react';
import Border from '../assets/Flagship.png';
import Border2 from '../assets/Flagship3.png';
import blueBorder from '../assets/Flagshipblue.png';
import blueBorder2 from '../assets/Flagshipblue2.png';
import hoverAudioFile from '../assets/hoveraudio.mp3'; // Import the audio file
import './EventsList.css';
import useDocumentInteraction from '../useDocumentInteraction'; // Import the custom hook
import Navbar from '../navbar';

function EventsList() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const userInteracted = useDocumentInteraction(); // Use the custom hook to track document interactions
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    // Function to check if the screen size matches the condition for playing audio
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Example breakpoint for laptops and larger screens
    };

    // Initial check when the component mounts
    checkScreenSize();

    // Event listener for screen size changes
    window.addEventListener('resize', checkScreenSize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const playAudioOnHover = () => {
    if (userInteracted) {
      const hoverAudio = new Audio(hoverAudioFile); // Create audio element with imported file
      setAudioPlaying(true);
      hoverAudio.play();
    }
  };

  return (
    <div>
      <nav><Navbar/></nav>
<div className='section'>
      
      <div className="title">
      </div>
      <ul className="list">
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/Photography" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Pixelate</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/IrixIconic" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">I-rix Iconic</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/LogoMaking" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Pixel Power-Up</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/MusicMixing" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">ByteBeat Fusion</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/TechGlam" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Tech Glam</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/ReelMaking" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Reelscape</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/MemeMaking" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Meme Making</div>
          </a>
        </li>
      </ul>
      {isLargeScreen && audioPlaying && (
        <audio autoPlay={false} src={hoverAudioFile} onEnded={() => setAudioPlaying(false)} />
      )}
    </div>
    </div>
    
  );
}
export default EventsList;