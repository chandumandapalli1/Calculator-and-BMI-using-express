const express=require('express')
const app=express()
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));


// all dealing with routes here--> Home route "/"
app.get("/",function(req,res)
{
    // res.send("Hey chandra man ")
    // for sending file res.sendFile() method is being used
    // res.sendFile(__dirname+"/index.html");
    //decision which  to decide either calulator or bmi
    res.sendFile(__dirname+"/decision.html");
});



app.post("/cal",function(req,res)
{
    res.sendFile(__dirname,"+/decision.html");
})



//post method is useful when certain submission is done on website  on a particular route
app.post("/cal",function(req,res)
{
    res.sendFile(__dirname+"/index.html");

    
});

app.post("/bmi",function(req,res)
{
    res.sendFile(__dirname+"/bmi.html");
    


});

app.post("/takecal",function(req,res)
{
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is "+ result);
})

app.post("/takebmi",function(req,res)
{
    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    var result=weight/(height*height);
    res.send("BMI is "+ result);
})

//this is mandate to let server listen on the port 3000
app.listen(3000,function(req,res)
    {
        console.log("server started at port 3000");
    
       
    }
)