import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/Navbar';
import BooksView from '../features/Books/BooksView';
import AddBook from '../features/Books/AddBook';
import EditBooks from '../features/Books/EditBooks';

const Index = () => {
  return <Router>
        <Navbar/>
        <main>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/show-books" element={<BooksView/>}></Route>
              <Route path="/add-book" element={<AddBook/>}></Route>
              <Route path="/edit-book" element={<EditBooks/>}></Route>
              <Route path="*" element={<Error/>}></Route>
          </Routes>
        </main>
  </Router>
}

export default Index;