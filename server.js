const express = require('express');
const connectDB = require('./config/db');

const recipie = require('./routes/api/recipies')

const app = express();

connectDB();

app.use(express.json({ extended: false }));


app.use('/api/recipies', recipie)



app.get('/', (req, res) => res.send('Helloo world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
