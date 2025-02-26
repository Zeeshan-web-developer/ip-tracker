const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Trust proxies (e.g., Nginx, Heroku, AWS ELB)
app.set('trust proxy', true);

app.get("/", () => {
    res.json({
        message: 'app running'
    });
})

app.get('/ip', (req, res) => {
  // Get IP from proxy headers or direct connection
  const ip = req.ip;
  res.json({
    ip: ip,
    headers: req.headers['x-forwarded-for'],
    message: 'Trust proxy enabled'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});