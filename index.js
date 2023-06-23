const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello Zaheer! This is home page?')
// })

// app.get('/about',(req,res)=>{
//     res.send('this is about page')
// })

// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// })

// app.listen(port, () => {
//   console.log(`app is listening on web address --> http://localhost:${port}`)
// })

app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars')

console.log(path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,"static")));

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/css/style.css")));

app.use('/', require(path.join(__dirname,'routes/blogs.js')));
// console.log(path.join(__dirname,'routes/blogs.js'));

// app.get('/',(req,res)=>{
//   res.render('home');
// })

app.listen(port, ()=>{
  console.log(`app is listening on web address --> http://localhost:${port}`);
})