const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const collection = require('./mongodb')
const crypto = require('crypto');

const indexRouter = require('./routes/index');
const sobreRouter = require('./routes/sobre');
const perfilRouter = require('./routes/perfil');
const login_signRouter = require('./routes/login_sign');
const amigosRouter = require('./routes/amigos');
const chatRouter = require('./routes/chat');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/sobre', sobreRouter);
app.use('/perfil', perfilRouter);
app.use('/login_sign', login_signRouter);
app.use('/amigos', amigosRouter);
app.use('/chat', chatRouter);

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
}

app.post("/login_sign", async (req, res)=>{

  if (req.body.name && req.body.email && req.body.password){
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: getHashedPassword(req.body.password)
    }
  
    await collection.insertMany([data])
  
    res.render("./index")
  }else if(req.body.email_login && req.body.password_login){
    try{
      const check = await collection.findOne({email: req.body.email_login})

      if (check.password === getHashedPassword(req.body.password_login)){
        console.log(check.name,'logado com sucesso')
        res.render('./index')
      }else{
        console.log('senha incorreta')
      }
    }catch{
      console.log('algo de errado')
    }
  }
  

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
