import React, { useState } from 'react';
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
          <a href="/Webathon" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Webathon</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/IceBreaker" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Ice Breaker</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/CSSBattle" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Markup Madness</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/Debugging" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Error Expedition</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/BlindCoding" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Blind Coding</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/TreasureHunt" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Finding Shark</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/Debate" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Logical Clash</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/Quiz" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Mind Blitz</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/PCBuilding" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Build Genius</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/ByteQuest" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Into the Unknown</div>
          </a>
        </li>
        {/* <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/LogoMaking" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Pixel Power-up</div>
          </a>
        </li> */}
        
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/SQL" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">DB Duo</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/CodeWithC" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">C Quest</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/PitchDeck" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Pitch Deck</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/FastestTyping" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Quick Keys</div>
          </a>
        </li>
        {/* <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/CSSBattle" className="link">
            <img src={Border} className="image initial-image" alt="Initial" />
            <img src={blueBorder} className="image hover-image" alt="Hover" />
            <div className="text">Markup Madness</div>
          </a>
        </li>
        <li className="item" onMouseEnter={playAudioOnHover}>
          <a href="/Debugging" className="link">
            <img src={Border2} className="image initial-image" alt="Initial" />
            <img src={blueBorder2} className="image hover-image" alt="Hover" />
            <div className="text">Error Expedition</div>
          </a>
        </li> */}
      </ul>
      {audioPlaying && (
        <audio autoPlay={false} src={hoverAudioFile} onEnded={() => setAudioPlaying(false)} />
      )}
    </div>
    </div>
    
  );
}
export default EventsList;