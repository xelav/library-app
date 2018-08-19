const express = require('express');
const cors = require('cors');
const app = express();
const fs = require("fs");
var path = require('path');

const contents = fs.readFileSync("data.json");
const jsonContent = JSON.parse(contents);

var port = process.env.PORT || 4000;

app.use(cors());
app.use(express.static('dist'));

app.get('/api/books', (req, res) => res.send(jsonContent));
app.get('/api/books/:bookId(\\d+)', (req, res) => {
    let id = Number(req.params.bookId);
    foundObject = jsonContent.find(o => o.id === id);
    if (foundObject !== undefined) {
        res.send(foundObject);
    } else {
        res.status(404)
            .send('Book not found!');
    }
});
app.get('/home', (req, res) => {
    res.sendFile('/dist/index.html', {root: __dirname })
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});