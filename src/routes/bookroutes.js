const express=require('express');

const booksRouter = express.Router();

function ro(nav){

var books=[

    {
        title:"tom and jerry",
        img:"th.jpg",
        author:"joseph"
        
    },
    {
        title:"harry potter",
        img:"row.jpg",
        author:"J K Rowling"
        
    }
    
    ]
    
    booksRouter.route('/')
    
    .get(function (req,res){
             res.render("books",
       {nav,
       books
    });
    })
    
    booksRouter.get('/:id',function(req,res){
    
    const id=req.params.id
    
    res.render('book',{
       nav,
        book:books[id]
    
    })
    
    })
    return booksRouter;
}

    module.exports=ro;