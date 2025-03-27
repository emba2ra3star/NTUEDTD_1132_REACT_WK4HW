import Header from "../components/Header";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="container main-layout min-h-screen mx-auto bg-base-100">
            <Header className="header" />
            <BookList />
            <Footer className="footer" />
        </div>
    );
}

export default Home;