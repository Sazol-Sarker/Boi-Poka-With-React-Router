import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags, publisher } =
    book;
  return (
    // <div className='border-4 rounded-md p-2 mt-2 border-teal-400'>
    //     <h2>book id:{bookId}</h2>
    //     <h2>book bookName:{bookName}</h2>
    // </div>

    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-2 rounded-2xl border-2 border-[#F3F3F3">
        <figure className="py-8 bg-[#F3F3F3] border-4 border-transparent">
          <img
            src={image}
            className="w-[124px] h-[166px] rounded-md"
            alt={bookName}
          />
        </figure>

        <div className="card-body">
          {/* tags need iterating  */}
          <div className="card-actions text-sm justify-start">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="badge badge-outline border-transparent py-4 px-4 text-[16px] bg-[#F3F3F3] text-[#23BE0A]"
              >
                {tag}
              </div>
            ))}
            {/* //tags static */}
            {/* <div className="badge badge-outline border-transparent py-4 px-4 text-[16px] ml-3 bg-[#F3F3F3] text-[#23BE0A]">
          Products
        </div> */}
          </div>
          <h2 className="card-title text-[24px] mb-4 font-bold">
            {bookName}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p className="text-[16px] pb-5">By: {author}</p>

          <div className="flex justify-between border-t-2 pt-5 border-dashed border-gray-300">
            <p className="text-[16px]">{category}</p>
            <span className="flex items-center gap-1">
              <p className="text-[16px]">{rating}</p>
              <button>
                <FaRegStar className="text-[24px] text-[#424242] ml-2" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
