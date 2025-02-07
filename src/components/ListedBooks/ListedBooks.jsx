import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getListFromLSDb } from "../../utility/localStorageDbHandler";
import { useEffect, useState } from "react";
import BookDataInTab from "../BookDataInTab/BookDataInTab";

const ListedBooks = () => {
  const [readBooksList, setReadBooksList] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);
  console.log("readBooksList", readBooksList);
  console.log("WishListBooks", wishListBooks);
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
    console.log(books, wishListItemFromLSDb);

    // Filter out the wish books list from books json data
    const wishBooks = books.filter((book) =>
      wishListItemFromLSDb.includes(book.bookId)
    );
    setWishListBooks(wishBooks);
  }, []);

  return (
    <div>
      {/* <h2>Books {books.length}</h2> */}
      <div className="text-3xl flex justify-center items-center border-2 border-transparent m-4 p-4 rounded-2xl font-bold bg-gray-100">
        <h1>BOOKS</h1>
      </div>
      {/* drop down : sort by */}
      <div className="text-3xl flex justify-center items-center border-2 border-transparent m-4 p-4 rounded-2xl font-bold bg-gray-100">
        <select className="select select-bordered w-full max-w-xs text-white bg-[#23BE0A] text-center text-xl">
          <option disabled selected>
            Sort By
          </option>
          <option>Alphabetically</option>
          <option>Numrically</option>
        </select>
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
