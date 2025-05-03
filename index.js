import express, { json } from "express";
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(json());

// POST route for Keto callback
app.post("/trade/callback", (req, res) => {
  console.log("Received callback:", req.body);
  // You can process the payload here
  res.status(200).send("Callback received");
});

// Basic health check
app.get("/", (req, res) => {
  res.send("Keto Postback Server Running");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
