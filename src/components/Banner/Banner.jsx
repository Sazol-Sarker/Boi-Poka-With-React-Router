import { Link } from 'react-router-dom';
import BannerImg from '../../assets/books.jpg'
const Banner = () => {

  return (
    <div className="hero bg-base-200 border-transparent rounded-lg max-w-6xl h-[554px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="max-w-sm h-[394px] my-[80px] mr-[80px] rounded-lg shadow-2xl"
        />
        <div className='py-[148px] pl-[110px]'>
          <h1 className="text-[56px] font-bold">Books to freshen up your bookshelf</h1>
         <Link to='/listedBooks'>
          <button  className="btn btn-primary py-3 mt-5 border-transparent rounded-sm text-white bg-[#23BE0A]">View The List</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
