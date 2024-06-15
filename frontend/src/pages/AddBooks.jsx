import React, { useState } from 'react';
import axios from 'axios';

const AddBooks = () => {
    const [Data, setData] = useState({ bookname: "", author: "", description: "", price: "", image: "" });

    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/add", Data).then((res) => alert(res.data.message));
    };

    console.log(Data);

    

    return (
        <div className="bg-dark text-white d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="container p-4">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Book Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name='bookname' value={Data.bookname} placeholder="Enter Book Name" onChange={change} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Author</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name='author' value={Data.author} placeholder="Enter Author's Name" onChange={change} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Description</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name='description' value={Data.description} placeholder="Enter Description Of The Book" onChange={change} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Cover</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name='image' value={Data.image} placeholder="Enter Url" onChange={change} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Price</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" name='price' value={Data.price} placeholder="Enter Price" onChange={change} />
                </div>

                <button className='btn btn-success' onClick={submit}>Submit</button>
            </div>
        </div>
    );
}

export default AddBooks;