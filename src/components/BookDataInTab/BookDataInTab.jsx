import { GrLocation } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { Link } from "react-router-dom";

const BookDataInTab = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    rating,
    category,
  } = book;
  return (
    // max-w-2xl lg:card-side
    <div className="card w-80  max-w-sm h-[550px] py-0 flex flex-col items-center    bg-base-100 shadow-sm my-4 rounded-3xl border-2 border-gray-300  ">
      <figure className="bg-gray-100 w-[230px] h-[250px] border-2 rounded-xl m-2 md:m-6 mx-auto ">
        <img
          src={image}
          className=" w-[130px] h-[172px] rounded-sm "
          alt={bookName}
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title px-0 py-0 text-md md:text-lg  ">
          {bookName}
        </h2>
        <p>By: {author}</p>
        <div className="flex flex-col   md:gap-2">
          <span className="flex flex-wrap items-center">
            <b>Tag</b>
            {tags?.map((tag, idx) => (
              <span
                className="badge p-2 md:p-4 ml-4 text-[#23BE0A] bg-slate-100 bg-opacity-50 font-bold"
                key={idx}
              >
                #{tag}
              </span>
            ))}
          </span>
          <span className="flex items-center ">
            <span className="">
              <GrLocation className="text-2xl pr-1" />
            </span>
            Year Of Publishing: {yearOfPublishing}
          </span>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center w-auto">
            <span className="hidden md:inline">
              <FaUserFriends className="text-3xl pr-2" />
            </span>
            <span className="text-md">Publisher: {publisher}</span>
          </div>
          <div className="flex items-center">
            <span className="hidden md:inline">
              <LuNotebookText className="text-3xl pr-2" />
            </span>
            <span> Pages {totalPages}</span>
          </div>
        </div>
        <div className="divider"></div>

        <div className="flex md:gap-5 ">
          <button className="badge w-auto text-sm md:px-4 py-2 md:py-4 h-8  text-[#328EFF] bg-[#328EFF]/15 rounded-3xl border-transparent">
            Category: {category}
          </button>
          <button className="badge w-auto  text-sm md:px-4 py-2 md:py-4 h-8  text-[#FFAC33] bg-[#FFAC33]/15 rounded-3xl border-transparent">
            Rating: {rating}
          </button>
          <Link to={`/books/${bookId}`}>
            <button className=" bg-[#23BE0A] text-white w-auto text-sm px-2 md:px-4 h-10  rounded-3xl border-transparent">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDataInTab;
