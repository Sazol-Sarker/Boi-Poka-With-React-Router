import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getListFromLSDb } from "../../utility/localStorageDbHandler";
import { useEffect, useState } from "react";
import BookDataInTab from "../BookDataInTab/BookDataInTab";

const ListedBooks = () => {
  const [readBooksList, setReadBooksList] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);
  const [sortByOption, setSortByOption] = useState("");

  // console.log("readBooksList", readBooksList);
  // console.log("WishListBooks", wishListBooks);
  // getting books json data while page loading
  const books = useLoaderData();

  //   getting data from Read list Local Storage
  useEffect(() => {
    const readItemFromLSDb = getListFromLSDb("read-list");
    // console.log(books, readItemFromLSDb);

    // Filter out the read books list from books json data
    const readBooks = books.filter((book) =>
      readItemFromLSDb.includes(book.bookId)
    );
    setReadBooksList(readBooks);
    // console.log("readBooksList", readBooksList);
  }, []);

  //   getting data from Read list Local Storage
  useEffect(() => {
    const wishListItemFromLSDb = getListFromLSDb("wish-list");
    // console.log(books, wishListItemFromLSDb);

    // Filter out the wish books list from books json data
    const wishBooks = books.filter((book) =>
      wishListItemFromLSDb.includes(book.bookId)
    );
    setWishListBooks(wishBooks);
  }, []);

  // handle sort by options click events
  // ratingAscSort
  const ratingAscSort = (pickedOption) => {
    setSortByOption(pickedOption);
    const updatedBookItemList=[...readBooksList].sort((a,b)=>a.rating-b.rating);
    setReadBooksList(updatedBookItemList);

  };
  //totalPagesAscSort
  const totalPagesAscSort = (pickedOption) => {
    setSortByOption(pickedOption);
    const updatedBookItemList=[...readBooksList].sort((a,b)=>a.totalPages-b.totalPages);
    setReadBooksList(updatedBookItemList);

  };

  return (
    <div>
      <title>Book List</title>
      {/* <h2>Books {books.length}</h2> */}
      <div className="text-3xl flex justify-center items-center border-2 border-transparent m-4 p-4 rounded-2xl font-bold bg-gray-100">
        <h1>BOOKS</h1>
      </div>
      {/* drop down : sort by */}
      <div className="text-3xl flex justify-center items-center border-2 border-transparent m-4 p-4 rounded-2xl font-bold bg-gray-100">
        <select className="select select-bordered w-full max-w-xs text-white bg-[#23BE0A] text-center text-xl">
          <option disabled selected>
            {sortByOption?`Sort By ${sortByOption}`:'Sort By'}
          </option>
          <option onClick={()=>ratingAscSort('Rating (Ascending)')}>Rating Asc</option>
          <option onClick={()=>totalPagesAscSort('Total PAges (Ascending)')}>Total Pages Asc</option>
        </select>
      </div>

      {/* 2nd dropdown menu */}
      <div className="dropdown dropdown-bottom flex justify-center items-center  hover:text-pink-400">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-[#23BE0A] text-xl hover:bg-pink-400  text-white "
        >
          {sortByOption?`Sort By: ${sortByOption}`:'Sort By'}
          
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] text-md w-52 p-2 shadow border-2 border-pink-300"
        >
          <li onClick={() => totalPagesAscSort("Total Pages Ascending")}>
            <a>Total Pages (Ascending)</a>
          </li>

          <li
            onClick={() => ratingAscSort("Rating Ascending")}
            className="border-t-2 border-pink-400"
          >
            <a>Rating (Ascending)</a>
          </li>
        </ul>
      </div>

      {/* tabs containers */}
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-lg">
            {" "}
            <b>Read Books</b> : {readBooksList.length}
          </h2>
          {/* daisu ui card with badge */}
          {readBooksList.map((book) => (
            <BookDataInTab key={book.bookId} book={book}></BookDataInTab>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-lg">
            <b>Wish List Books</b>: {wishListBooks.length}
          </h2>
          {/* daisu ui card with badge */}
          {wishListBooks.map((book) => (
            <BookDataInTab key={book.bookId} book={book}></BookDataInTab>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
