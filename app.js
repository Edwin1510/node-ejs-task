const express=require('express');
const API_SERVER=express();


API_SERVER.post("/createroom", (req, res) => {
    res.status(200).json({
      message: "createroom successfully",
    });
  });
  
  API_SERVER.post("/bookroom", (req, res) => {
    res.status(200).json({
      message: "book room successful",
    });
  });
  
  API_SERVER.get("/listallroom", (req, res) => {
    res.status(200).json({
      message: "list all room successful",
    });
  });
  
  API_SERVER.get("/listallcustomer", (req, res) => {
    res.status(200).json({
      message: "list  all customer successful",
    });
  });
  API_SERVER.get("/countcustomer", (req, res) => {
    res.status(200).json({
      message: "count  customer successful",
    });
  });

      module.exports=API_SERVER;