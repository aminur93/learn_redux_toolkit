import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BooksSlice';

const EditBooks = () => {

  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [id] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateBook({id, title, author}));

    navigate("/show-books", {replace: true});
  }

  return (
    <div>
        <h2>Edit Book</h2>

        <form onSubmit={handleSubmit}>
          <div className='form-field'>
              <label htmlFor='title'>Ttile : </label>
              <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className='form-field'>
              <label htmlFor='author'>Author : </label>
              <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>

            <button type="submit">Edit Book</button>
        </form>
    </div>
  )
}

export default EditBooks