import React from 'react';

const Book = ({book}) => {
    const {bookId,bookName}=book;
    return (
        <div className='border-4 rounded-md p-2 mt-2 border-teal-400'>
            <h2>book id:{bookId}</h2>
            <h2>book bookName:{bookName}</h2>
        </div>
    );
};

export default Book;