const mongoose = require('mongoose');
async function main() {
    try {
        await mongoose.connect("mongodb+srv://leandrofrancagti:Q9AArFGZg0YvjI31@cluster0.ij1mqka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }    
}
module.exports = main;