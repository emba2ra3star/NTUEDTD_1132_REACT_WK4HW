import Header from "../components/Header";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

function Home() {
    // main-layout
    return (
        <div className="container main-layout min-h-screen mx-auto bg-base-100">
            <Header className="header" />
            <main className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mx-[20%]">
                <BookList />
            </main>
            <Footer className="footer" />
        </div>
    );
}

export default Home;