const express = require('express');
const app = express();
const port = 3000;

// Route to get client IP
app.get('/ip', (req, res) => {
  const clientIP = req.ip; // Get IP from request object
  res.send({ ip: clientIP });
});

// Handle proxy scenarios (if behind Nginx/load balancer)
// app.set('trust proxy', true); // Uncomment this if using a proxy

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});