
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/book_review", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Sample schema
const Book = mongoose.model("Book", {
    title: String,
    author: String,
    description: String,
    rating: Number
});

// Sample endpoint
app.get("/books", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
