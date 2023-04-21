const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req,res)=>{
    res.render('login.html')
});

server.listen(3000, ()=> {
    console.log('app.js rodando na porta 3000 em http://localhost:3000')
});