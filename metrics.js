const express = require("express");
const client = require("prom-client");
const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(80, () => {
  console.log("Metrics exposed on port 80 at /metrics");
});
