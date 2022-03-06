const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('views'));


app.get('/',(req,res)=>{
    res.render('home',{ hello :'testing', l : ['MLSA', 'Event', 'Azure', 'Cloud']} );
});

app.get('/sample',(req,res)=>{
    res.render('sample',{ hello :'data sample', l : ['MLSA', 'Event', 'Azure', 'Cloud']} );
});


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server Started');  
});