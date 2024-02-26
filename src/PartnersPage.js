import React from 'react'
import Partners from './Partners'
import waffle from './assets/waffle.png'
import softie from './assets/Softie1.JPEG'
import shams from './assets/Shams.jpeg'

function PartnersPage() {
    const sponsorsData = [
        { name: 'Sponsor 1', logo: waffle},
        { name: 'Sponsor 2', logo: softie },
        { name: 'Sponsor 3', logo: shams },

        // Add more sponsors as needed
      ]
  return (
    <div>
        <Partners sponsors={sponsorsData} />
    </div>
  )
}

export default PartnersPage