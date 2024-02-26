import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import Input from '../components/input';
import Button from '../components/button';
import { useDispatch } from 'react-redux';
import { showToastTimer } from '../redux/actions/toast';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import QR from '../assets/AKQR.jpeg'
import ReCAPTCHA from 'react-google-recaptcha';
import CustomCAPTCHA from '../CustomCAPTCHA';


function TeamRegistration() {
    const [representativeName, setRepresentativeName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [phNumber, setPhNumber] = useState('');
    const [totalTeamMembers, setTotalTeamMembers] = useState('');
    const [paymentProof, setPaymentProof] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success');
    const [showQR, setShowQR] = useState(false);
    const [rollNumberError, setRollNumberError] = useState('');
    const [hiddenFieldValue, setHiddenFieldValue] = useState('');
    const [captcha, setCaptcha] = useState(generateCaptcha());
const [userInput, setUserInput] = useState('');
const [error, setError] = useState('')
const [captchaVerified, setCaptchaVerified] = useState(false);
    const handleToggleQR = () => {
        setShowQR(!showQR);
    };
    const validateRollNumber = (value) => {
        // Your validation logic for the Roll Number field
        const regex = /^[A-Za-z0-9]+$/;
        return regex.test(value) ? null : 'Invalid Roll Number. Please enter a valid Roll Number.';
    };
    function generateCaptcha() {
        // Generate a random 4-character alphanumeric string for the CAPTCHA
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 4; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        if (!captchaVerified) {
            setError('Please verify the CAPTCHA.');
            return;
        }
        

        if (userInput.toUpperCase() !== captcha.toUpperCase()) {
            // CAPTCHA verification failed, display error message
            setError('Incorrect CAPTCHA. Please try again.');
            // Generate a new CAPTCHA code
            setCaptcha(generateCaptcha());
            return; // Exit function if CAPTCHA verification fails
        }


        if (hiddenFieldValue) {
            console.log('Bot detected. Form submission blocked.');
            return;
        }

        if (representativeName && rollNumber && collegeName && phNumber && totalTeamMembers && paymentProof && !submitting) {
            if (totalTeamMembers > 15) {
                // Show error message for total team members exceeding the limit
                displayAlert('Total team members should be less than or equal to 15', 'error');
                return; // Exit function if validation fails
            }

            // Additional validation for Indian phone number
            if (!/^\+?\d{10,14}$/.test(phNumber)) {
                displayAlert('Invalid phone number. Please enter a valid Indian phone number.', 'error');
                return;
            }

            setSubmitting(true);

            const formData = new FormData();
            formData.append('representativeName', representativeName);
            formData.append('rollNumber', rollNumber);
            formData.append('collegeName', collegeName);
            formData.append('phNumber', phNumber);
            formData.append('totalTeamMembers', totalTeamMembers);
            formData.append('paymentProof', paymentProof);

            try {
                const response = await fetch('https://i-rix.tech/api/teamregfile', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    if (response.status === 429) {
                        // Too many submissions error
                        throw new Error('Too many submissions!!');
                    } else {
                        throw new Error('Failed to register team');
                    }
                }

                // Reset form
                resetForm();

                // Show toast message
                dispatch(showToastTimer('Team registered successfully', 'success'));

                // Display alert message
                displayAlert('Team registered successfully', 'success');
                setTimeout(() => {
                    navigate('/');
                }, 6000);

            } catch (error) {
                console.error('Error:', error);

                if (error.message === 'Too many submissions!!') {
                    // Display the error message for too many submissions
                    displayAlert('Too many submissions,try again later', 'error');
                } else {
                    // Show toast message for other errors
                    dispatch(showToastTimer('Error registering team', 'error'));

                    // Display alert message for other errors
                    displayAlert('Error registering team', 'error');
                }
            } finally {
                setSubmitting(false);
            }
        }
    };

    const displayAlert = (message, type) => {
        // Set alert message and type
        setAlertMessage(message);
        setAlertType(type);

        // Show the alert with a delay
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 6000); // Adjust the delay as needed
    };

    const resetForm = () => {
        setRepresentativeName('');
        setRollNumber('');
        setCollegeName('');
        setPhNumber('');
        setTotalTeamMembers('');
        setPaymentProof(null);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        // Check file size
        if (selectedFile.size > 5 * 1024 * 1024) {
            // Show warning if the file size exceeds 5MB
            displayAlert('File size exceeds 5MB. Please choose a smaller file.', 'warning');
        } else {
            // Check file type (extension)
            const allowedExtensions = ['png', 'jpg', 'jpeg'];
            const fileExtension = selectedFile.name.split('.').pop().toLowerCase();

            if (allowedExtensions.includes(fileExtension)) {
                // File type is allowed, set paymentProof
                setPaymentProof(selectedFile);
            } else {
                // Show warning if the file type is not allowed
                displayAlert('Please choose a PNG or JPG file.', 'warning');
            }
        }
    };

    return (
        <div>
            <Navbar />
            <Container style={{ marginTop: '5%' }}>
                <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Input
                                width="100%"
                                label="Team Leader"
                                placeholder="Team Leader"
                                value={representativeName}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    if (/^[A-Za-z\s]*$/.test(inputValue) && inputValue.length <= 30) {
                                        setRepresentativeName(inputValue);
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12}>
                            <Input
                                width="100%"
                                label="Roll Number"
                                placeholder="Roll Number"
                                value={rollNumber}
                                onChange={(e) => {
                                    const enteredRollNumber = e.target.value;
                                    setRollNumber(enteredRollNumber);

                                    // Validation for Roll Number
                                    if (!/^\d+$/.test(enteredRollNumber) && !/^[A-Za-z\d]*$/.test(enteredRollNumber)) {
                                        setRollNumberError('Invalid Roll Number. It should contain both letters and numbers, or only numbers.');
                                    } else if (/^[A-Za-z]+$/.test(enteredRollNumber)) {
                                        setRollNumberError('Invalid Roll Number. It should contain both letters and numbers, or only numbers.');
                                    } else if (enteredRollNumber.length > 17) {
                                        setRollNumberError('Roll Number should be less than or equal to 17 characters.');
                                    } else {
                                        setRollNumberError('');
                                    }
                                }}
                            />
                            {rollNumberError && (
                                <p style={{ color: 'red', marginTop: '10%' }}>{rollNumberError}</p>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input
                                width="100%"
                                label="College Name"
                                placeholder="College Name"
                                value={collegeName}
                                onChange={(e) => setCollegeName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input
                                width="100%"
                                label="Phone Number"
                                placeholder="Phone Number"
                                value={phNumber}
                                onChange={(e) => setPhNumber(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input
                                width="100%"
                                label="Total Team Members"
                                placeholder="Total Team Members"
                                value={totalTeamMembers}
                                onChange={(e) => {
                                    const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                    setTotalTeamMembers(numericValue);
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Input
                                width="100%"
                                type="file"
                                label="Upload Payment Proof"
                                onChange={handleFileChange}
                            />
                        </Grid>

                        <div style={{ display: 'inline-block' }}>
                            <h2
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#238aee',
                                    border: 'none',
                                    color: 'white',
                                    padding: '15px 20px', // Adjusted padding
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    borderRadius: '8px',
                                    minWidth: '150px', // Add a minimum width to prevent size change
                                    boxSizing: 'border-box', // Ensure padding and border are included in the width
                                    marginLeft:'25px',
                                }}
                                onClick={handleToggleQR}
                            >
                                SHOW QR
                            </h2>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            {showQR && (
                                <img
                                    src={QR}
                                    alt="QR Code"
                                    style={{
                                        maxWidth: '100%', // Ensure the image doesn't exceed its container width
                                        height: 'auto', // Maintain aspect ratio
                                    }}
                                />
                            )}
                        </div>

                        <input
                            type="text"
                            name="bot-field"
                            style={{ display: 'none' }}
                            value={hiddenFieldValue}
                            onChange={(e) => setHiddenFieldValue(e.target.value)}
                        />
                        <CustomCAPTCHA
                captcha={captcha}
                setCaptcha={setCaptcha}
                userInput={userInput}
                setUserInput={setUserInput}
                error={error}
                setError={setError}
                captchaVerified={captchaVerified}
                setCaptchaVerified={setCaptchaVerified}
            />
                        
                    </Grid>

                    <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Register Team'}
                        </Button>
                    </div>
                </form>
                {showAlert && (
                    <MuiAlert
                        severity={alertType}
                        onClose={() => setShowAlert(false)}
                        sx={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}
                    >
                        {alertMessage}
                    </MuiAlert>
                )}
            </Container>
        </div>
    );
}

export default TeamRegistration;
