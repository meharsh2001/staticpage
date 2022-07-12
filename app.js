var express         =require("express"),
    port            =process.env.PORT || 8000,
    app             =express()

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

//HOME
app.get("/",function(req,res)
{   
    res.render("home");
});

app.listen(port,function()
{
    console.log("http://localhost:"+port+"/");
});