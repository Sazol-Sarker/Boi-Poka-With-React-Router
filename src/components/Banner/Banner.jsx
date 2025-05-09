import { Link } from "react-router-dom";
import BannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <>
      <div className="hidden lg:inline hero bg-base-200 border-transparent rounded-lg max-w-6xl max-h-[554px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BannerImg}
            className="md:max-w-sm md:max-h-[394px] my-[80px] md:mr-[80px] rounded-lg shadow-2xl"
          />
          <div className="py-[148px] pl-[110px]">
            <h1 className="text-[35px] md:text-[56px] font-bold">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/listedBooks">
              <button className="btn btn-primary py-3 mt-5 border-transparent rounded-sm text-white bg-[#23BE0A]">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* // mobile view */}
      <div
        className="hero bg-fixed h-[450px] lg:hidden "
        style={{
          backgroundImage:
            `url(${BannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-2xl font-bold">Varities of Books</h1>
            <p className="mb-5">
              Books to freshen up your bookshelf
            </p>
            <Link to="/listedBooks">
              <button className="btn btn-primary py-3 mt-5 border-transparent rounded-sm text-white bg-[#23BE0A]">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
