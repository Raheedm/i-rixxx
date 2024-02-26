import React, { useState } from 'react';
import Input from './components/input';
import { Container, Grid } from '@mui/material';
import './CustomCAPTCHA.css'

function CustomCAPTCHA({ handleSubmit }) {
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');
    const [captchaVerified, setCaptchaVerified] = useState(false);

    function generateCaptcha() {
        // Generate a random 4-character alphanumeric string for the CAPTCHA
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 4; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    const handleVerification = () => {
        if (userInput.toUpperCase() === captcha.toUpperCase()) {
            setError('');
            setCaptchaVerified(true);
        } else {
            setError('Incorrect CAPTCHA. Please try again.');
            setCaptcha(generateCaptcha());
            setCaptchaVerified(false);
        }
    };

    return (
        <Container maxWidth="sm" className='custom-captcha'>
            <Grid container spacing={2} justifyContent="left" alignItems="center">
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="captcha" style={{ marginRight: '10px', color: 'white', fontFamily: 'IBM' }}>Enter the CAPTCHA code:</label>
                            <Input
                                type="text"
                                id="captcha"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                style={{ marginRight: '10px', padding: '5px' }}
                            />
                        </div>
                        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                        <p style={{ marginTop: '10px', color: 'white', fontFamily: 'IBM' }}>CAPTCHA: {captcha}</p>
                        <div style={{ marginTop: '10px' }}>
                            <button type="button" onClick={handleVerification} style={{ padding: '5px 10px', backgroundColor: '#238aee', color: 'white', border: 'none', cursor: 'pointer' }}>Verify CAPTCHA</button>
                            {captchaVerified && <span style={{ color: 'green', marginLeft: '10px' }}>✓</span>}
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CustomCAPTCHA;
