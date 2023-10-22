// require the express module
const express = require ("express");
// obtaine the app object 
const app = express();
// path require
const path = require("path");
// addding static files 
app.use(express.static('public'));
// assigning the port to the server
const HTTP_PORT = process.env.port || 8000;

// starting the server on port 8000
app.listen(HTTP_PORT,()=>{
    console.log(`server is listening on the port ${HTTP_PORT}`);
})

// get route for the home 
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

// about route
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/about.html'));
});