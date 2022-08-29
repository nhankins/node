const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send("Welcome to the Home Page!")
});

app.get('/api/users', (req, res) => {
   res.send("users"); 
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Hi");
});

