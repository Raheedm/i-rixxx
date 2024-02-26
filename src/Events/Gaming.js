import React, { useState } from 'react';
import Border from '../assets/Flagship.png';
import Border2 from '../assets/Flagship3.png';
import blueBorder from '../assets/Flagshipblue.png';
import blueBorder2 from '../assets/Flagshipblue2.png';
import hoverAudioFile from '../assets/hoveraudio.mp3'; // Import the audio file
import './EventsList.css';
import useDocumentInteraction from '../useDocumentInteraction'; // Import the custom hook
import Navbar from '../navbar';

function Gaming() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const userInteracted = useDocumentInteraction(); // Use the custom hook to track document interactions

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
          <a href="/BGMI" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">BGMI</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/Valorant" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Valorant</div>
          </a>
        </li>
        
      </ul>
      {audioPlaying && (
        <audio autoPlay={false} src={hoverAudioFile} onEnded={() => setAudioPlaying(false)} />
      )}
    </div>
    </div>
    
  );
}
export default Gaming;