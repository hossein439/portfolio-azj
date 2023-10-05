console.clear();

const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
// const axios = require('axios');

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());

app.use(function(req, res, next) {
    const originAllow = ['http://localhost:3000', 'http://localhost:3001'];
    const origin = req.headers.origin;
    if(originAllow.includes(origin)){
        res.header("Access-Control-Allow-Origin", origin); 
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


require('./db/mongoose.js');
const port = process.env.PORT || 4000;
app.use(routes);

// axios.post('http://localhost:4000/register')
// .then((res) => {
//     console.log(res.data)
//     console.log('Super admin is created!');
// })
// .catch((err) => {
//     console.log(err);
// });

app.listen(port, () => {
    console.log(`Server is on up ${port}`);
});