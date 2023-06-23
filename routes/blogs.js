const express = require('express');
const path = require('path');
const blogs = require('../data/blog.js');
// const port=3000;

const router = express.Router();

 router.get('/',(req,res)=>{
   //  res.sendFile(path.join(__dirname, '../templates/index.html'));
   res.render('home');
 })

//  console.log(path.join(__dirname,'../data/blog.js'))

 router.get('/blogs',(req,res)=>{
   // blogs.forEach(element => {
   //    console.log(element);
   // });
   //  res.sendFile(path.join(__dirname,'../templates/bloghome.html'));
   res.render('blogHome',{
      blogs:blogs
   })
 })

 router.get('/blogpost/:slugs',(req,res)=>{
   let myBlogs = blogs.filter((e) =>{
      return e.slugs == req.params.slugs
   })
   // // console.log(req.params.slug.slice(1));
   // console.log(myBlogs);
   // res.sendFile(path.join(__dirname,'../views/blogPage.html'));
   res.render('blogpage',{
      blogs:myBlogs
   })
 })

 module.exports = router;

 

// console.log(path.join(__dirname,'../templates/index'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../templates/index.html'));
// })

// app.listen(port ,()=>{
//     console.log('3000')
// })