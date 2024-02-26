import Navbar from '../navbar'
import React from 'react'

function LogoMaking() {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQBgi4h3jHzw7c63D8o0VXFhglminodWZ4-b4-wN9qKaCT_dT4pknXKCNJ9ZyEBHg/pub?embedded=true"
          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  )
}

export default LogoMaking;