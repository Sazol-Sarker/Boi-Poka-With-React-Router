import { NavLink } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="text-red-400 text-5xl font-serif font-bold h-screen w-96 mx-auto flex flex-col justify-center items-center">
           <title>Error Page</title>
            <h3>OOPS! Error</h3>
            <NavLink to="/">
            <button>Go to home</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;