import Header from "../components/Header";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container bg-red-600 1fr">
                <BookList />
            </main>
            <Footer />
        </div>
    );
}

export default Home;