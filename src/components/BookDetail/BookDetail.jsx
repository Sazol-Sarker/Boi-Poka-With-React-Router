import { useLoaderData, useParams } from "react-router-dom";
import {addToLSDb} from "../../utility/localStorageDbHandler";

const BookDetail = () => {
  const { bookId } = useParams();
  console.log(typeof bookId);
  const id = parseInt(bookId);
  const data = useLoaderData();
  const bookData = data.find((book) => book.bookId === id);
  // destructuring the book details found by array find
  const {
    bookId: bookNo,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = bookData;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>{`${bookName} | Book Details`}</title>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-[425px] max-h-[564px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold mb-2">{bookName}</h1>
          <h1 className="text-xl ">By: {author}</h1>
          <div className="divider"></div>

          <p className="text-xl">{category}</p>
          <div className="divider"></div>
          <p className="text-md text-gray-600"><span className="font-bold text-black">Review: </span>{review}</p>

          <div className="flex  items-center my-2">
            <h3 className="text-md font-bold">Tag</h3>
          {
            tags.map((tag,idx)=><p  key={idx} className="pl-8 text-green-500">#{tag}</p>)
          }
          </div>

          <div className="divider"></div>

          <div className="flex  text-lg my-4">
            <div className="mr-8">
            <p >Number of Pages:  </p>
            <p > Publisher:   </p>
            <p > Year of Publishing:   </p>
            <p >  Rating: </p>
  
            </div>
            <div>

            <p> <b>{totalPages}</b> </p>
            <p>  <b>{publisher}</b> </p>
            <p><b>{yearOfPublishing}</b> </p>
            <p> <b>{rating}</b> </p>
            </div>

          </div>

          <button onClick={()=>addToLSDb(bookNo,'read-list')} className="btn btn-outline text-black font-bold text-lg mt-3">Mark as Read</button>
          <button onClick={()=>addToLSDb(bookNo,'wish-list')} className="btn btn-accent text-white font-bold text-lg ml-5">Add to Wish List</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
