import Grid from '@mui/material/Grid'
import headingLogo from './assets/logomain.svg'

import './header.css'

const HomeNav = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      className="footer"
      sx={{ marginBottom: '2rem' }}
    >
      
      <Grid item sx={{ paddingTop: 2 }}>
        <img src={headingLogo} alt="IRIX" className="img" style={{ height: '310px' ,width:'500px' }} />
      </Grid>
      
    </Grid>
  )
}

export default HomeNav
