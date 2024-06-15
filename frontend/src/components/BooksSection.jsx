import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BooksSection = ({ Data }) => {
    const [books, setBooks] = useState(Data);
    const [selectedBook, setSelectedBook] = useState(null);
    const [updatedBookData, setUpdatedBookData] = useState({
        // Initialize with empty values or default values if needed
        bookname: '',
        description: '',
        author: '',
        image: '',
        price: 0
    });

    const deleteBook = async (book) => {
        try {
            await axios.delete(`http://localhost:1000/api/v1/deleteBook/${book._id}`);
            setBooks(prevBooks => prevBooks.filter(item => item._id !== book._id));
            alert("Book deleted successfully!");
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    const handleUpdate = (book) => {
        setSelectedBook(book);
        setUpdatedBookData({
            bookname: book.bookname,
            description: book.description,
            author: book.author,
            image: book.image,
            price: book.price
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBookData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:1000/api/v1/updateBook/${selectedBook._id}`, updatedBookData);
            alert(response.data.message);
            // Update the state with the updated book data
            setBooks(prevBooks => prevBooks.map(item => (item._id === selectedBook._id ? { ...item, ...updatedBookData } : item)));
            setSelectedBook(null); // Clear the selectedBook state
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
            {books && books.map((item, index) => (
                <div className='card bg-dark m-3' style={{ width: "200px", height: "350px", border: "1px solid white", borderRadius: "20px" }} key={index}>
                    <div> <img style={{ width: "200px", height: "210px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className='img-fluid' src={item.image} alt='/' /> </div>
                    <h5 className='text-white px-2 my-1' style={{ fontSize: "15px" }}>{item.bookname.slice(0, 20)}</h5>
                    <b style={{ fontSize: "30px", color: "red" }} className='m-0 px-2' >${item.price}</b>
                    <div className='d-flex justify-content-around align-tems-center my-2'>
                        <button className='btn btn-primary' onClick={() => handleUpdate(item)}>Update</button>
                        <button className='btn btn-danger' onClick={() => deleteBook(item)}>Delete</button>
                    </div>
                </div>
            ))}
            {selectedBook && (
                <div className="update-form">
                    <h2>Update Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Book Name:</label>
                            <input type="text" name="bookname" value={updatedBookData.bookname} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text" name="description" value={updatedBookData.description} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Author:</label>
                            <input type="text" name="author" value={updatedBookData.author} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Image URL:</label>
                            <input type="text" name="image" value={updatedBookData.image} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input type="number" name="price" value={updatedBookData.price} onChange={handleChange} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default BooksSection;
