// // Partners.js

// import React from 'react';
// import './Partners.css'; // Import the CSS file for styling

// const Partners = ({ sponsors }) => {
//   return (
//     <div className="partners-container">
//       <h2 style={{fontFamily:'Blanka',color:'white'}} >Our Sponsors</h2>
//       <div className="logos-container">
//         {sponsors.map((sponsor, index) => (
//           <img key={index} src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Partners;
import React from 'react';
import './Partners.css'; // Import the CSS file for styling

const Partners = ({ sponsors }) => {
  const handleLogoClick = (websiteUrl) => {
    window.open(websiteUrl, '_blank');
  };

  return (
    <div className="partners-container">
      <h2 style={{ fontFamily: 'Blanka', color: 'white' }}>Our Event Sponsors</h2>
      <div className="logos-container">
        {sponsors.map((sponsor, index) => (
          <a key={index} href={sponsor.website} target="_blank" rel="noopener noreferrer" onClick={() => handleLogoClick(sponsor.website)}>
            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
          </a>
        ))}
      </div>
      <h2 style={{ fontFamily: 'Blanka', color: 'white' }}>Thank you for you contributions</h2>
    </div>
  );
};

export default Partners;
