const express = require('express');
const multer = require('multer');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rah004@chowgules.ac.in',
    pass: 'Whoisthis@3', 
  },
});

const publicDirectoryPath = path.join(__dirname, 'public/uploads');

if (!fs.existsSync(publicDirectoryPath)){
    fs.mkdirSync(publicDirectoryPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicDirectoryPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB file size limit
  }
});

const User = mongoose.model('User', {
  representativeName: String,
  rollNumber: String,
  collegeName: String,
  phNumber: String,
  totalTeamMembers: Number,
  paymentProofName: String,
  paymentProofPath: String,
}, 'users');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});











const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 2, // Max requests per windowMs
    keyGenerator: (req) => {
      const forwardedFor = req.headers['x-forwarded-for'];
      return forwardedFor ? forwardedFor.split(',')[0] : req.ip;
    },
    message: 'Too many requests from this IP, please try again later.',
});
  
app.use('/api/teamregfile', limiter);

app.post('/api/teamregfile', upload.single('paymentProof'), async (req, res) => {
  try {
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);

    if (!req.file) {
      return res.status(400).json({ success: false, msg: 'No file uploaded' });
    }

    const {
      representativeName,
      rollNumber,
      collegeName,
      phNumber,
      totalTeamMembers,
    } = req.body;
    const { filename: paymentProofName, path: paymentProofPath } = req.file;

    if (
      !representativeName ||
      !rollNumber ||
      !collegeName ||
      !phNumber ||
      !totalTeamMembers ||
      !paymentProofName ||
      !paymentProofPath
    ) {
      return res
        .status(400)
        .json({ success: false, msg: 'Incomplete team registration data' });
    }

    const newTeamRegistration = new User({
      representativeName,
      rollNumber,
      collegeName,
      phNumber,
      totalTeamMembers,
      paymentProofName,
      paymentProofPath,
    });

    try {
      const savedTeam = await newTeamRegistration.save();
      console.log('Saved to database:', savedTeam);
    } catch (error) {
      console.error('Error saving to database:', error);
      return res.status(500).json({ success: false, msg: 'Internal server error' });
    }

    console.log(`Sending email with attachments: ${paymentProofName}, ${paymentProofPath}`);
    await transporter.sendMail({
      from: 'rah004@chowgules.ac.in',
      to: 'raheedmuzawar@gmail.com',
      subject: 'New Team Registration IRIX 2024',
      text: 'A new team has registered for IRIX',
      attachments: [
        {
          filename: paymentProofName,
          path: paymentProofPath,
        },
        {
          filename: 'registration_details.txt', // You can change the filename as needed
          content: `Representative Name: ${representativeName}\nRoll Number: ${rollNumber}\nCollege Name: ${collegeName}\nPhone Number: ${phNumber}\nTotal Team Members: ${totalTeamMembers}`, // Attach the form data as a text file
        },
      ],
    });

    console.log('Email sent successfully');
    res.status(200).json({ success: true, msg: 'Team registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, msg: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
