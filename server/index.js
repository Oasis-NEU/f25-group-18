const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express.js Boilerplate!');
});

app.listen(process.env.PORT || 5000)

export default app