import { Typography, useMediaQuery } from '@mui/material'

import InstagramIcon from '../../assets/SVGs/instaWhite.svg'

import './index.css'
import { useMatch } from 'react-router-dom'
import waffle from '../../assets/waffle.png'
const ImgStyle = {
  marginLeft: '2rem',
  width: '2rem',
  height: 'auto',
  cursor: 'pointer',
}

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:900px)')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        paddingBottom: '25px',
        paddingTop: '50px',
        width: '100%',
        padding: '1rem 0',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" className="TextStyle">
        © Copyright I-RIX 2024
        <a href="https://www.instagram.com/irix_pccas/" target="_blank">
        <img src={InstagramIcon} alt="instagram" style={ImgStyle} />
      </a>
      </Typography>
      
      
    </div>
  )
}

export default Footer
