import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import './Events.css';
import Navbar from '../navbar';

const Events = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="container">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={5} md={4}>
            <Card className="card" style={{ backgroundColor: '#2b5ca1' }}>
              <CardActionArea component={Link} to="/Gaming">
                <CardContent className="card-content">
                  <Typography
                    variant="h5"
                    component="h2"
                    className="card-title"
                    style={{ fontFamily: 'Blanka', display: 'block' }}
                  >
                    Gaming
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="card-description"
                    style={{ display: 'block' }}
                  >
                    Click here for gaming events.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="card" style={{ backgroundColor: '#2b5ca1' }}>
              <CardActionArea component={Link} to="/Technical">
                <CardContent className="card-content">
                  <Typography
                    variant="h5"
                    component="h2"
                    className="card-title"
                    style={{ fontFamily: 'Blanka', display: 'block' }}
                  >
                    Technical
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="card-description"
                    style={{ display: 'block' }}
                  >
                    Click here for Technical events.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="card" style={{ backgroundColor: '#2b5ca1' }}>
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
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Events;
