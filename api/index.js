const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: '127.0.0.1:3000', 
}));



app.post('/register', (req,res) => {
    const {name,email,password} = req.body;
    res.json({name,email,password});
})

app.listen(3000);
