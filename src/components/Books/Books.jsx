import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks]=useState([]);
    // fetching books json data
    useEffect(()=>{
        fetch('/public/booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="my-5">
            <h2 className="text-center text-[40px] m-9 font-bold">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6">

            {
                books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
            </div>

        </div>
    );
};

export default Books;