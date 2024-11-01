import React, { useEffect, useState } from 'react'
import Book from '../book/Book';

const Books = () => {
  const [books,setBooks] = useState([]);

  useEffect(()=>{
      fetch('booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  },[])

  return (
    <div className='mt-10'>
         <h2 className='text-3xl font-bold mb-6 text-center'>Books: {books.length}</h2>
         <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {books.map(book => <Book key={book.bookId} book={book}></Book>)}
         </div>
    </div>
  )
}

export default Books