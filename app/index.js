const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.json())
app.use('/api', route);


app.listen(port, ()=>console.log(`Server has been started and listening on port ${port}`));