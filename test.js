import express from "express";
import http from "http"

// const app = express();

app.get("/",(req,res)=>res.send("Welcome to Express App."));

const server = app.listen(5000,()=>{
    console.log("Server started, running smoke test...");

    http.get('http://localhost:5000/',(res)=>{
        console.log(`Status: ${res.statusCode}`);
        if(res.statusCode == 200){
            console.log("Smoke test passed.");
            server.close();
            process.exit(0);
        }else{
            server.close();
            process.exit(1);
        }
    }).on('error',(err)=>{
        console.error('Request failed', err.message);
        server.close();
        process.exit(1);
    });
});