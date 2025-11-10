const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('StudySync+ backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
