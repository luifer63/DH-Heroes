const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    let indexPath = path.join(__dirname, "/views/index.html");
    res.sendFile(indexPath);
});

app.get("/babbage", (req, res) => {
    let indexPath = path.join(__dirname, "/views/babbage.html");
    res.sendFile(indexPath);
});

app.get("/berners-lee", (req, res) => {
    let indexPath = path.join(__dirname, "/views/berners-lee.html");
    res.sendFile(indexPath);
});

app.get("/clarke", (req, res) => {
    let indexPath = path.join(__dirname, "/views/clarke.html");
    res.sendFile(indexPath);
});

app.get("/hamilton", (req, res) => {
    let indexPath = path.join(__dirname, "/views/hamilton.html");
    res.sendFile(indexPath);
});

app.get("/hopper", (req, res) => {
    let indexPath = path.join(__dirname, "/views/hopper.html");
    res.sendFile(indexPath);
});

app.get("/lovelace", (req, res) => {
    let indexPath = path.join(__dirname, "/views/lovelace.html");
    res.sendFile(indexPath);
});

app.get("/turing", (req, res) => {
    let indexPath = path.join(__dirname, "/views/turing.html");
    res.sendFile(indexPath);
});

app.listen(3030, () => console.log("Servidor corriendo"));

