import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { addBook } from './BooksSlice';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();

      const book = {id:  uuidv4(), title, author};

      dispatch(addBook(book));

      navigate("/show-books", {replace: true});
  }

  return (
    <div>
        <h2>Add Book</h2>

        <form onSubmit={handleSubmit}>
          <div className='form-field'>
            <label htmlFor='title'>Ttile : </label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>

          <div className='form-field'>
            <label htmlFor='author'>Author : </label>
            <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          </div>

          <button type="submit">Add Book</button>
        </form>
    </div>
  )
}

export default AddBook