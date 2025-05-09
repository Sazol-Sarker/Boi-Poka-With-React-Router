import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Root.css";
const Root = () => {
  return (
    <>
    {/* max-w-6xl */}
      <div className="root w-10/12 mx-auto">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="">
         
          <Outlet></Outlet>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
