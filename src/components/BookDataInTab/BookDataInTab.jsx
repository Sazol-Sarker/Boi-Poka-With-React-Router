import { GrLocation } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";

const BookDataInTab = ({ book }) => {
  const {
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
    <div className="card lg:card-side bg-base-100 shadow-sm my-4 rounded-3xl border-2 border-gray-300  ">
      <figure className="bg-gray-100 w-[230px] h-[250px] border-2 rounded-xl m-6 ">
        <img src={image} className=" w-[130px] h-[172px] rounded-sm " alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="flex items-center">
          <b>Tag</b>
          {
            tags.map((tag,idx)=><span className="badge p-4 ml-4 text-[#23BE0A] bg-slate-100 bg-opacity-50 font-bold" key={idx}>#{tag}</span>)
          }
          <p className="flex items-center ml-4">
            <span className="">
              <GrLocation className="text-2xl pr-1" />
            </span>
            Year Of Publishing: {yearOfPublishing}
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center w-auto">
          
            <span>
              <FaUserFriends className="text-3xl pr-2"/>
            </span>
            Publisher: {publisher}
          </div>
          <div className="flex items-center">
            <span>
              <LuNotebookText className="text-3xl pr-2"/>
            </span>
            Pages {totalPages}
          </div>
        </div>
        <div className="divider"></div>

        <div className="flex gap-5 ">
          <button className="badge w-auto  px-4 py-4 text-lg   text-[#328EFF] bg-[#328EFF]/15 rounded-3xl border-transparent">
            Category: {category}
          </button>
          <button className="badge w-auto   text-lg px-4 py-4  text-[#FFAC33] bg-[#FFAC33]/15 rounded-3xl border-transparent">
            Rating: {rating}
          </button>
          <button className=" bg-[#23BE0A] text-white text-lg w-auto px-4 rounded-3xl border-transparent">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDataInTab;
