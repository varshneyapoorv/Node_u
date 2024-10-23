const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
 

const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');
app.use(shopRoutes);
app.use('/admin',adminRoutes);
// Parse URL-encoded bodies (from HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', '404.html'));

})





// Create the server and listen on port 3000
const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
