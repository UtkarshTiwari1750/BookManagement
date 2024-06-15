import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BooksSection from '../components/BooksSection';

const Books = () => {
    const [Data, setData] = useState(null); // Corrected syntax for useState
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:1000/api/v1/getBooks");
                setData(response.data.books);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
            <div className="container">
                <div className='d-flex justify-content-center align-items-center py-3'>
                    <h4 className='text-white'>Books Section</h4>
                </div>
                {Data ? <BooksSection Data={Data} /> : <div className='text-white'>loading...</div>}
            </div>
        </div>
    );
}

export default Books;
