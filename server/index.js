const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use((req, res) => {
    res.status(200).send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});