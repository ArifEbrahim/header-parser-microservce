const express = require("express");
const app = express();

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
  });
});

module.exports = app;
