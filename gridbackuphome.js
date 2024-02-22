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
                    <Link to="/about" className="menulink">
                      Partners
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
                    <Link to="/events" className="menulink">
                      Events
                      <div>
                        <img className="test3" src={line1} alt="line" />
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
                    <Link to="/eventregister" className='menulink'>
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

            {/* ------------------------------------End Main Sponser Icons----------------------------------------------------- */}
          </Grid>
        </Grid>