const express = require("express");
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.json'));
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Backend démarré sur http://localhost:${PORT}`));