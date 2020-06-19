const express=require('express');

// const booksRouter= express.Router();
 
const app= new express();

const nav=[  {link:"/books",author:'BOOKS'},{link:'/book2',author:'author2'},
    {link:'/login',author:'login'},{link:'/signup',author:'signup'},
     {link:'/createnew',author:'CREATENEW'}]

const booksRouter=require('./src/routes/bookroutes')(nav);


const authorRouter=require('./src/routes/authorroutes')(nav);

const signRouter=require('./src/routes/signuproutes');

const loginRouter=require('./src/routes/loginroutes');

const createRouter=express.Router();


app.use(express.static('./public'));

app.set('view engine','ejs');

app.set('views','./src/views');

app.use('/books',booksRouter);

app.use('/signup',signRouter);

app.use('/login',loginRouter);

app.use('/createnew',createRouter);

app.use('/book2',authorRouter);


app.get('/',function(req,res){

res.render("index",{nav})

});






createRouter.route('/')
.get(function(req,res){

res.render('create');

})




app.listen(5000);

