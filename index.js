const express = require('express');
const app = express();
const path = require('path');
const word = require("./api/word");

app.use(express.static('public'));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.use("/api/word", word);

app.listen(process.env.PORT || 3000);

module.exports = app;
