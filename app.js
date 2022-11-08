const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const request = require("request");

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

var geojson = {
    name : "vivek"
};
// function getFieldID(gjsn)
// {
//     const options = {
//         method: "POST",
//         url : "https://api-connect.eos.com/field-management",
//         headers: {
//             "x-api-key" : "apk.b4298ea53d7845b1d6d00b8d989b4e62190900bfe0c35eac84bea59add85bf84"
//         },
//         json : true,
        
//         body: gjsn
//     };
    
//     request(options,function(err, res1){
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             return(res1.body);
//         }
//     });

// }

app.post("/",function(req,res){
    geojson = JSON.parse(req.body.areaData);
    console.log(geojson);

    
    const options = {
        method: "POST",
        url : "https://api-connect.eos.com/field-management",
        headers: {
            "x-api-key" : "apk.b4298ea53d7845b1d6d00b8d989b4e62190900bfe0c35eac84bea59add85bf84"
        },
        json : true,
        
        body: geojson
    };
    
    request(options,function(err, res1){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(res1.body);
        }
    });

    // console.log(getFieldID(geojson));
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server is started on port 3000");
})


