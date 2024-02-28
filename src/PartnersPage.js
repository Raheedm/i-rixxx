import React from 'react';
import Partners from './Partners'; // Import the Partners component
import waffle from './assets/waffle.png'; // Import the images
import softie from './assets/Softie1.JPEG';
import shams from './assets/Shams.jpeg';
import AnklyticX from './assets/AnklyticX.jpeg';
import SJI from './assets/SJIN.png'
import eth from './assets/eth.png'

function PartnersPage() {
  const sponsorsData = [
    { name: 'Sponsor 1', logo: waffle, website: 'https://maps.app.goo.gl/L3PGBNw57JVaNdKL6' },
    { name: 'Sponsor 2', logo: softie, website: '#' },
    { name: 'Sponsor 3', logo: shams, website: 'https://maps.app.goo.gl/jUSY9e8pcSHmmkEW6' },
    { name: 'Sponsor 4', logo: AnklyticX, website: 'https://anklyticx.com/' },
    { name: 'Sponsor 5', logo: SJI, website: 'https://sjinnovation.com/offices/goa' },
    { name: 'Sponsor 5', logo: eth, website: 'https://expl.in/' },



    // Add more sponsors as needed
  ];

  return (
    <div>
      <Partners sponsors={sponsorsData} />
    </div>
  );
}

export default PartnersPage;
