const router = require("express").Router();
const bookModel = require("../models/BooksModel");

router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save();
        res.status(200).json({ message: "Book added successfully" });
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Failed to add book" });
    }
});

//GET REQUEST
router.get("/getBooks", async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books });
    } catch (error) {
        console.log(error);
    }
})

//get req by id
router.get("/getBooks/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book });
    } catch (error) {
        console.log(error);
    }
});

//update book by id

router.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id, {
            bookname,
            description,
            author,
            image,
            price,
        });
        await book.save().then(() => res.json({ message: "Data updated" }));
    } catch (error) {
        console.log(error);
    }
});

router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(() => res.status(201).json({ message: "DELETED SUCCESSFULLY" }));
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;

