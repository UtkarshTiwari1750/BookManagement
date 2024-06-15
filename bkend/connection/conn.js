const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://1032221576:1032221576@cluster0.s2ylff5.mongodb.net/crudop?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("connected")
})