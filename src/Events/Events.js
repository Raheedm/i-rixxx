import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import './Events.css';
import Navbar from '../navbar';
import Gaming from '../assets/newgame.png'
import Technical from '../assets/tech.jpg'
import Nontech from '../assets/non.jpeg'
import table1 from '../assets/day1.png'
import table2 from '../assets/day2.png'

const Events = () => {
  const [isDay1Visible, setIsDay1Visible] = useState(false);
  const [isDay2Visible, setIsDay2Visible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
      setIsMobile(mobileMediaQuery.matches);
    };

    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDay1Visibility = () => {
    setIsDay1Visible(!isDay1Visible);
  };

  const toggleDay2Visibility = () => {
    setIsDay2Visible(!isDay2Visible);
  };
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <h2 onClick={toggleDay1Visibility}
        style={{
          color: 'white',
          fontFamily: 'Blanka',
          letterSpacing: '3px',
          marginLeft: '5%',
          cursor: 'pointer',
          backgroundColor: '#238aee',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          outline: 'none',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'background-color 0.3s',
        }}

      >Event Schedule Day 1</h2>
      {!isMobile && isDay1Visible && (
        // <table style={{ width: '90%', borderCollapse: 'collapse',backgroundColor: 'black',color:'#238aee' }}>
        //   <thead style={{backgroundColor: 'black'}} >
        //     <tr>
        //       <th style={{ border: '3px solid white', padding: '8px', textAlign: 'left', backgroundColor: 'black' }}>Timing</th>
        //       <th style={{ border: '3px solid white', padding: '8px', textAlign: 'left', backgroundColor: 'black' }}>Event</th>
        //       <th style={{ border: '3px solid white', padding: '8px', textAlign: 'left', backgroundColor: 'black' }}>Venue</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>8:00am-9:00am</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Registration</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Outside B block</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>9:00am-10:00am</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Inauguration</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Upper Auditorium</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>9:30am-5:00pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Webathon</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Lab 1(DCS)</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>9:30am-5:00pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Valorant</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Lab 3(DCS)</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>10:00am-11:00am</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Ice Breaker</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Upper Auditorium</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>10:00am-12:00pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Code with C</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Lab 2(DCS)</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>10:00am-11:30am</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Bug Buster</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>MSc IT Lab 2</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>10:30am-11:30am</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Debate</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Flipped Classroom</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>11:00am-4:30pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Treasure hunt</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Full Campus</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>11:00am-5:00pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>BGMI</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Upper Auditorium</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>11:00am-1:00pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Blind Coding</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>MSc IT Lab 1</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>11:00am-11:30am</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Photography</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>F-102(DCS)</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>11:00am-11:30am</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Reel Making</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>F-103(DCS)</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>1:00pm-2:00pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Lunch break</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}></td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>2:00pm-5:00pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>CSS Battle</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Lab 2(DCS)</td>
        //     </tr>
        //     <tr>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>2:00pm-4:30pm</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Quiz</td>
        //       <td style={{ border: '3px solid white', padding: '8px', textAlign: 'left' }}>Flipped Classroom</td>
        //     </tr>
        //   </tbody>
        // </table>
        <table style={{ width: '90%', borderCollapse: 'collapse', backgroundColor: 'black', color: '#238aee' }}>
          <thead>
            <tr>
              <th>Timings/Venue</th>
              <th>Lab 1(DCS)</th>
              <th>Lab 2(DCS)</th>
              <th>Full Campus</th>
              <th>Upper Auditorium</th>
              <th>MSc IT Lab 2</th>
              <th>Lab 3(DCS)</th>
              <th>MSc IT Lab 1</th>
              <th>Flipped Classroom</th>
              <th>Outside B Block</th>
              <th>DCS (F-102)</th>
              <th>DCS (F-103)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8:00am-8:30am</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td rowSpan="2">Registration</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8:30am-9:00am</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>9:00am-9:30am</td>
              <td></td>
              <td></td>
              <td></td>
              <td rowSpan="2">Inauguration</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>9:30am-10:00am</td>
              <td rowSpan="7">Webathon</td>
              <td></td>
              <td></td>
              <td></td>
              <td rowSpan="7">Valorant</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10:00am-10:30am</td>
              <td rowSpan="4">Code with C</td>
              <td></td>
              <td rowSpan="2">Ice Breaker</td>
              <td rowSpan="3">Bug Buster</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10:30am-11:00am</td>
              <td></td>
              <td></td>
              <td></td>
              <td rowSpan="4">Debate</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11:00am-11:30am</td>
              <td rowSpan="11">Treasure Hunt</td>
              <td rowSpan="4">BGMI</td>
              <td rowSpan="4">Blind Coding</td>
              <td></td>
              <td>Photography</td>
              <td>Reel Making</td>
            </tr>
            <tr>
              <td>11:30am-12:00pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12:00pm-12:30pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12:30pm-1:00pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1:00pm-1:30pm</td>
              <td rowSpan="2" colSpan="2">Lunch Break</td>
              <td rowSpan="2" colSpan="8">Lunch Break</td>
            </tr>
            <tr>
              <td>1:30pm-2:00pm</td>
            </tr>
            <tr>
              <td>2:00pm-2:30pm</td>
              <td rowSpan="6">Webathon</td>
              <td rowSpan="6">CSS Battle</td>
              <td rowSpan="6">BGMI</td>
              <td></td>
              <td rowSpan="6">Valorant</td>
              <td></td>
              <td rowSpan="5">Quiz</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2:30pm-3:00pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3:00pm-3:30pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3:30pm-4:00pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4:00pm-4:30pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4:30pm-5:00pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
     {isMobile && isDay1Visible && (
        <img style={{width:'420px'}} src={table1} alt="Mobile Image" />
      )}

      <>
        <h2 onClick={toggleDay2Visibility}
          style={{
            color: 'white',
            fontFamily: 'Blanka',
            letterSpacing: '3px',
            marginLeft: '5%',
            cursor: 'pointer',
            backgroundColor: '#238aee',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            outline: 'none',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background-color 0.3s',
          }}

        >Event Schedule Day 2</h2>
        {!isMobile &&isDay2Visible && (
          <table>
            <thead>
              <tr>
                <th>Timings/Venue</th>
                <th>Lab 1(DCS)</th>
                <th>MSc IT Lab 1</th>
                <th>Lab 2(DCS)</th>
                <th>Quad</th>
                <th>MSc IT Lab 2</th>
                <th>Seminar Hall</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:30am-9:00am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>9:00am-9:30am</td>
                <td rowSpan="6">Into the Unknown</td>
                <td></td>
                <td rowSpan="2">PC Building</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>9:30am-10:00am</td>
                <td rowSpan="6">Logo Making</td>
                <td></td>
                <td></td>
                <td rowSpan="6">Pitch Deck</td>
              </tr>
              <tr>
                <td>10:00am-10:30am</td>
                <td></td>
                <td></td>
                <td rowSpan="4">Music Making</td>
              </tr>
              <tr>
                <td>10:30am-11:00am</td>
                <td rowSpan="4">SQL</td>
                <td></td>
              </tr>
              <tr>
                <td>11:00am-11:30am</td>
                <td></td>
              </tr>
              <tr>
                <td>11:30am-12:00pm</td>
                <td></td>
              </tr>
              <tr>
                <td>12:00pm-12:30pm</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12:30pm-1:00pm</td>
                <td rowSpan="2">Fastest Typing</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:00pm-1:30pm</td>
                <td rowSpan="2">Lunch Break</td>
                <td rowSpan="2">Lunch Break</td>
                <td>Lunch Break</td>
                <td rowSpan="2" colSpan="2">Lunch Break</td>
              </tr>
              <tr>
                <td>1:30pm-2:00pm</td>
                <td></td>
              </tr>
              <tr>
                <td>2:00pm-2:30pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2:30pm-3:00pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3:00pm-3:30pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td rowSpan="2">Mr and Miss</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3:30pm-4:00pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4:00pm-4:30pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td rowSpan="2">Valedictory</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4:30pm-5:00pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        )}
        
        {isMobile && isDay2Visible && (
        <img style={{width:'420px'}} src={table2} alt="Mobile Image" />
      )}

        <style>
          {`
          table {
            margin-left:5%;
            
            width: 90%;
            border-collapse: collapse;
            background-color: black;
            font-family: Blanka;
            color: #238aee;
            letter-spacing: 0.1px;
          }
          th, td {
            border: 3px solid white;
            padding: 8px;
            text-align: left;
            
          }
          th {
            background-color: black;
          }
          td{
            width:0.1%;
            white-space: nowrap;
          }
          @media (max-width: 600px) {
            table {
              font-size: 12px; /* Adjust font size for smaller screens */
            }
            th, td {
              
              width: 100%;
            }
            /* Additional styles for hiding or collapsing columns as needed */
          }
        `}
        </style>
      </>


      <div className="container">

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={5} md={4}>
            <Card className="card" style={{ backgroundColor: '#2b5ca1' }}>
              <CardActionArea component={Link} to="/Gaming">
                <Typography style={{ fontFamily: 'Blanka', paddingBottom: '2%' }}>
                  Gaming
                </Typography>
                <img src={Gaming} style={{ width: '100%', height: '150%', marginBottom: '-2%' }} ></img>
                {/* <CardContent className="card-content">
                </CardContent> */}
              </CardActionArea>

            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="card" style={{ backgroundColor: '#2b5ca1' }}>
              <CardActionArea component={Link} to="/Technical">
                <Typography style={{ fontFamily: 'Blanka', paddingBottom: '2%' }}>
                  Technical
                </Typography>
                <img src={Technical} style={{ width: '100%', height: '150%', marginBottom: '-2%' }} ></img>
                {/* <CardContent className="card-content">
                </CardContent> */}
              </CardActionArea>

            </Card>

          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="card" style={{ backgroundColor: '#2b5ca1' }}>
              <CardActionArea component={Link} to="/nontechnical">
                <Typography style={{ fontFamily: 'Blanka', paddingBottom: '2%' }}>
                  Non Technical
                </Typography>
                <img src={Nontech} style={{ width: '100%', height: '100%', marginBottom: '-2%' }} ></img>
                {/* <CardContent className="card-content">
                </CardContent> */}
              </CardActionArea >

            </Card>
            {/* <Card className="card" style={{ backgroundColor: '#2b5ca1' }}>
              <CardActionArea component={Link} to="/nontechnical">
                <CardContent className="card-content">
                  <Typography
                    variant="h5"
                    component="h2"
                    className="card-title"
                    style={{ fontFamily: 'Blanka', display: 'block' }}
                  >
                    Non Technical
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="card-description"
                    style={{ display: 'block' }}
                  >
                    Click here for Non Technical events.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Events;
