const express = require('express');
const path = require('path');
const app = express();

const indexRoutes = require('./routes/index');

//Setings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname , 'views'))
app.engine('html',require('ejs').renderFile)
app.set('view engine','ejs');


//Routes
app.use(indexRoutes);


//Static Files
app.use(express.static(path.join(__dirname,'public')))

//Middleware


//Listening
app.listen(app.get('port'),(req,res)=>{
    console.log('Server on port', app.get('port'));
});