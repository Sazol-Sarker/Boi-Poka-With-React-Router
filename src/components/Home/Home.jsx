import Banner from '../Banner/Banner'
import Books from '../Books/Books'
const Home = () => {
    return (
        <div>
            <title>Boi Poka | Home Page</title>
            {/* <h2>this is home page</h2> */}
            <Banner></Banner>
            <section>
            <Books></Books>
            </section>
           
        </div>
    );
};

export default Home;