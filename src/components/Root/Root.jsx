import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="border-4 border-red-500">
        <p>Root outlet body</p>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
