const express = require('express');
const session = require('express-session');

const app = express();

// Middleware for using sessions (you may need to configure the session options)
app.use(session({
    secret: 'your-secret-key', // Change this to a secure secret key
    resave: false,
    saveUninitialized: true
}));

// Serve your static files (e.g., HTML, CSS, JavaScript)
app.use(express.static('public'));

// Your login endpoint
app.post('/login', (req, res) => {
    // You would typically verify the user's credentials here
    // For simplicity, we'll just set a session variable
    req.session.user = { username: 'exampleUser' };
    res.json({ success: true });
});

// Your logout endpoint
app.post('/logout', (req, res) => {
    // Destroy the user's session to log them out
    req.session.destroy(err => {
        if (err) {
            console.error('Error logging out:', err);
            res.status(500).json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
