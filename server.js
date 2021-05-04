const express = require('express');
const helmet = require('helmet');
const path = require(`path`);
const bodyParser = require('body-parser');

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hi Darrin! ;)');
});

app.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.post('/submit', (req, res) => {
    console.log({
      name: req.body.name,
      message: req.body.message
    });
    res.send('Thanks for your message!');
});

app.get('/*', (req, res) => {
    res.status(404).send("Sorry, the page you are looking for doesn't exists.");
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});