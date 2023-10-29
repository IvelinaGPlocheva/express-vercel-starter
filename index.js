const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})


// Creating a new endpoint to fetch the word from the external API
app.get('/word', async (req, res) => {
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


app.listen(process.env.PORT || 3000);

module.exports = app;
