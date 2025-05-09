import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags, publisher } =
    book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-72 md:w-80 lg:96 h-[500px]  mx-auto max-w-md shadow-xl p-2 rounded-2xl border-2 border-[#F3F3F3] transform transition-transform duration-300 hover:scale-105 ">
        <figure className="py-4 md:py-8 bg-[#F3F3F3] border-4 border-transparent">
          <img
            src={image}
            // w-[124px] h-[166px]
            className="w-24 max-w-28 h-40 rounded-md"
            alt={bookName}
          />
        </figure>

        <div className="card-body">
          {/* tags need iterating  */}
          <div className="card-actions text-sm justify-start flex">
            {tags?.map((tag, idx) => (
              <div
                key={idx}
                className="badge badge-outline border-transparent py-4 px-2 text-[12px] md:text-[16px] bg-[#F3F3F3] text-[#23BE0A]"
              >
                {tag}
              </div>
            ))}
            {/* //tags static */}
            {/* <div className="badge badge-outline border-transparent py-4 px-4 text-[16px] ml-3 bg-[#F3F3F3] text-[#23BE0A]">
          Products
        </div> */}
          </div>
          <h2 className="card-title text-[18px] md:text-[24px] mb-4 font-bold">
            {bookName}
          </h2>
          <p className="text-[14px]  md:text-[16px] pb-5">By: {author}</p>

          <div className="flex justify-between border-t-2 pt-5 border-dashed border-gray-300">
            <p className="text-[12px] md:">{category}</p>
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
