const axios = require('axios');
const express = require("express");
const router = express.Router();


// Creating a new endpoint to fetch the word from the external API
router.get('/', async (req, res) => {
    console.log("In get word");
    console.log(process.env.API_KEY);
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/randomword?type=noun', {
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    });

    res.json(response.data); // Sending the data as a JSON response
  } catch (error) {
    res.status(500).send(error.message || error);
  }
});

module.exports = router;
