import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('/public/booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="m-5">
            <h2 className="text-center text-xl font-bold">Books</h2>
            {
                books.map(book=><Book key={book.bookId} book={book}></Book>)
            }

        </div>
    );
};

export default Books;