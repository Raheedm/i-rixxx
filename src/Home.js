import { useState, useEffect } from 'react'
import { useStyles } from './Home.style'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { Modal, Grid } from '@mui/material'
import './Homefonts.css'
import './Home.css'
import line1 from './assets/SVGs/Union.svg'
import line2 from './assets/SVGs/unionTwo.svg'
import { Link, useLocation } from 'react-router-dom'
import { moreFunction, backoptions } from './HomeFun'

import SocialIcons from './SocialIcons'
import waffle from './assets/waffle.png'
import './Home.animation.css'
import './App.css'
import Loader from './components/loader/index'

function Home({ open, setOpen, handleOpen, handleClose, inProp, setInProp }) {
  const [fakeLoading, setFakeLoading] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const classes = useStyles()
  // const mainSponsors = useSelector((state) => state.sponsor.mainSponsors)

  // const { userInfo } = useSelector((state) => state.userLogin)

  const duration = 300

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  // const Transition = forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />
  // })


  

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false)
    }, 2000)
  }, [])

  
    return (
      <div className={classes.root} style={{ marginTop: '-2.4rem' }}>
        {/* Announcement Modal */}
        {/* <Transition in={inProp} timeout={500}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className="modal"
            >
            
            </div>
          )}
        </Transition> */}

        {/* for main container */}
        {/* for Navbar */}
        <div className="text-overlay">
  <span className="big-text">MARCH</span><br />
  <span className="small-text">1<sup>st</sup> &amp; 2<sup>nd</sup></span>
</div>
        <Grid>
          <Grid container>
            {/* for Menu */}
            
            <Grid
              container
              columns={{ lg: 13, sm: 12, xs: 12 }}
              className="menuwithsocial"
              justifyContent={{ md: 'center', xs: 'center', sm: 'center' }}
            >
              <Grid item lg={12} className="menupad" id="mainpage">
                <Grid className="menufont" container alignItems="center">



                  

                  
                  <Grid item container justifyContent="center" lg={6} xs={12}>
                    {/* {userInfo ? (
                      <Link to="/profile" className="menulink">
                        Profile
                        <div>
                          <img className="test1" src={line1} alt="line" />
                        </div>
                      </Link>
                    ) : (
                      <Link to="/login" className="menulink">
                        Login
                        <div>
                          <img className="test0" src={line1} alt="line" />
                        </div>
                      </Link>
                    )} */}
                    <Link to="/About" className="menulink">
                      About
                      <div>
                        <img className="test3" src={line1} alt="line" />
                      </div>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent={{ lg: 'flex-end', xs: 'center' }}
                    lg={6}
                    xs={12}
                    order={{ lg: 3, xs: 2 }}
                    className={classes.events}
                  >
                    <Link to="/Events" className="menulink">
                      Events
                      <div>
                      <img className="test3" src={line1} alt="line" style={{ marginLeft: '1px' }} />

                      </div>
                    </Link>
                  </Grid>
                  {/* <Grid
                    item
                    container
                    justifyContent={{ lg: 'flex-end', xs: 'center' }}
                    lg={6}
                    xs={12}
                    order={{ lg: 2, xs: 5 }}
                  >
                    <div onClick={moreFunction}>
                      <Link to="" className="menulink">
                        More..
                        <div>
                          <img className="test2" src={line2} alt="line" />
                        </div>
                      </Link>
                    </div>
                  </Grid> */}
                  
                  <Grid
                    item
                    container
                    justifyContent={{ lg: 'flex-end', xs: 'center' }}
                    lg={6}
                    xs={12}
                    order={{ lg: 3, xs: 2 }}
                    className={classes.events}
                  >
                    <Link to="/Partners" className="menulink">
                      Partners
                      <div>
                      <img className="test3" src={line1} alt="line" style={{ marginLeft: '60px' }} />

                      </div>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent="center"
                    lg={6}
                    xs={12}
                    order={{ lg: 4, xs: 3 }}
                    className={classes.News}
                  >
                    <Link to="/Reg" className='menulink'>
                    <div
                      className="menulink"
                      style={{ cursor: 'pointer' }}
                      
                    >
                      Register
                      <div>
                        <img className="test4" src={line2} alt="line" />
                      </div>
                    </div>
                    </Link>
                    
                  </Grid>
                  {/* <Grid
                    item
                    container
                    justifyContent="center"
                    lg={12}
                    xs={12}
                    order={{ lg: 5, xs: 4 }}
                  >
                    <Link to="/about" className="menulink">
                      About Us
                      <div>
                        <img className="test5" src={line2} alt="line" />
                      </div>
                    </Link>
                  </Grid> */}
                </Grid>
              </Grid>

              {/* -------------------------------------------------------------------------------- */}

              <Grid item lg={12} className="menupad2" id="moreoptions">
                <Grid className="menufont" container alignItems="center">
                  <Grid item container justifyContent="center" lg={6} xs={12}>
                    <Link to="/team" className="menulink">
                      Team
                      <div>
                        <img className="test8" src={line1} alt="line" />
                      </div>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent={{ lg: 'flex-end', xs: 'center' }}
                    lg={6}
                    xs={12}
                    order={{ lg: 2, xs: 4 }}
                  >
                    <div onClick={backoptions}>
                      <Link to="" className="menulink">
                        Back..
                        <div>
                          <img className="test2" src={line2} alt="line" />
                        </div>
                      </Link>
                    </div>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent={{ lg: 'flex-end', xs: 'center' }}
                    lg={6}
                    xs={12}
                    order={{ lg: 3, xs: 2 }}
                  >
                    <Link to="/contact" className="menulink">
                      Contact
                      <div>
                        <img className="test7" src={line1} alt="line" />
                      </div>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent="center"
                    lg={6}
                    xs={12}
                    order={{ lg: 4, xs: 3 }}
                  >
                    <Link to="/partners" className="menulink">
                      About Us
                      <div>
                        <img className="test6" src={line2} alt="line" />
                      </div>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              {/* ------------------------------------Social Icons----------------------------------------------------- */}

              <SocialIcons />
              {/* ------------------------------------End of Social Icons----------------------------------------------------- */}
            </Grid>

            {/* {mainSponsors.length ? (
              <>
                <div className={classes.Sponsor}>Partnered By</div>
                <div className={classes.SponsorImg}>
                  {mainSponsors.map((aMainSponsor) => (
                    <img
                      src={aMainSponsor.sponsorLogo}
                      height={100}
                      width={100}
                      style={{ margin: '0 1.5rem' }}
                      alt="IRIX"
                    />
                  ))}
                </div>
              </>
            ) : null} */}

            {/* ------------------------------------Main Sponser Icons----------------------------------------------------- */}
            {/* <img src={waffle} style={{width:'120px',height:'100px',marginLeft:'50px'}}/> */}

            {/* ------------------------------------End Main Sponser Icons----------------------------------------------------- */}
          </Grid>
        </Grid>
      </div>
    )
  }


export default Home;
