import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material'
import './about.css'
import dcs from './assets/CSdept.png'
import irix from './assets/logomain.svg'
import line1 from './assets/SVGs/Union.svg'
import Navbar from './navbar'


function About() {

    return (
        <div>
            <Navbar/>
       
        <Container>
            <Grid container spacing={4} alignItems={'center'}>
                <Grid item lg={8} sm={8}>
                    <div className="blankaa">
                        About IRIX
                        <img className="underlines" src={line1} alt="line" />
                    </div>
                    <div className="whitetext">
                        I-RIX is an annual intercollegiate event organized by the
                        students and faculty of the Department of Computer Science
                        at Parvatibai Chowgule College of Arts and Science. At I-RIX, we
                        transcend traditional boundaries, offering a diverse array of
                        events that cater to both the technical expertise and the
                        creative ingenuity of our participants. Whether you're a coding
                        virtuoso or a visionary artist, there's something for everyone to
                        indulgein.
                        But beyond the thrill of competition, I-RIX embodies a spirit of
                        collaboration and growth. We believe in the power of collective
                        intelligence and the transformative potential of shared
                        experiences. Through our events, workshops, and networking
                        opportunities, participants have the chance to learn,
                        collaborate, and forge lifelong connections with like-minded
                        peers.
                        our slogan, "Invoke. Innovate. Implement.", encapsulates the
                        essence of what we stand for. We believe in the power of
                        invocation, of summoning forth the boundless potential within
                        each of us. We champion innovation as the driving force
                        behind progress, pushing the boundaries of what is possible.
                        And ultimately, we advocate for Implementation,for turning dreams into reality,ideas into action.            </div>
                </Grid>
                <Grid item className="buildingcontainer" lg={4} sm={4}>
                    <div>
                    <img className="dcsbuilding" style={{ maxWidth: '100%', height: 'auto' }} src={irix} alt="IRIX" />

                    </div>
                </Grid>
                <Grid
                    item
                    className="buildingcontainer"
                    lg={4}
                    sm={4}
                    xl={5}
                    order={{ sm: 3, lg: 3, xs: 4 }}
                >
                    <div>
                        <img className="dcsbuilding" style={{ maxWidth: '100%', height: 'auto' }} src={dcs} alt="DCS building" />
                    </div>
                </Grid>
                <Grid item lg={8} sm={8} xl={7} order={{ sm: 4, lg: 4, xs: 3 }}>
                    <div className="blankaa">
                        About DCS
                        <img className="underlines" src={line1} alt="line" />
                    </div>
                    <div className="whitetext">
                        The Department of Computer Science was established in 1986. With the initiatives taken by the former Principal V.R. Shirgurkar, Prof. C.D. Pradhan and Late Prof. U.A. Katre, the Post Graduate Diploma in Computer Applications was offered to the students and herein started the growth journey of the department.The department has played a major role in contributing to the academic community and society at large.

                        Subsequently, recognizing the need for skilled computer professionals, the B.Sc. program in Computer Science was introduced in the year 1991 and M.Sc. IT (Information Technology) was started in the year 2003. Both these programs are affiliated to the Goa University. Department of Computer Science took an initiative to start BVoc program in Software Development in the year 2017.

                        To augment the knowledge base of the students, the department conducts various short term, addon/honors programmes, seminars, workshops, internship programme and other need based courses from time to time. The department has launched three Inter-Collegiate Technical Competitions GIGATECH, IRIX and Technobit in which students from other colleges of the state take part.

                        Identifying the need of using open source softwares the department took an initiative to start FOSS(free and open source) club in the year 2015. A large number of students have passed out from this department over the last 35 years and have been absorbed by the industrial and business houses.

                        The department uses modern teaching and learning aids for teaching learning process. Department is well equipped with up to date hardware and software laboratories. All the above facilities are supported by a centralized uninterrupted power supply.
                    </div>
                </Grid>
            </Grid>
            {/* Important! Always set the container height explicitly */}
            <div
                style={{
                    height: '300px',
                    width: '100%',
                    borderRadius: '8px',
                    marginTop: '24px',
                }}
            >
                <div className="google-map-code">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.593124566481!2d73.9805389!3d15.289968700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb17fcc195b4f%3A0xeee152f61a424c47!2sParvatibai%20Chowgule%20College%20Arts%20And%20Science%20(Autonomous)!5e0!3m2!1sen!2sin!4v1708961573093!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe
                        title="DCS"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.593124566481!2d73.9805389!3d15.289968700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb17fcc195b4f%3A0xeee152f61a424c47!2sParvatibai%20Chowgule%20College%20Arts%20And%20Science%20(Autonomous)!5e0!3m2!1sen!2sin!4v1708961573093!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        frameborder="0"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    ></iframe>
                </div>
            </div>
        </Container>
        </div>
    )
}


export default About;
