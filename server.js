const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1 style="color:darkred">Welcome to hot restaurant</h1>')
})

app.listen(PORT, () => {
console.log(`listening at http://localhost:${PORT}`)
})