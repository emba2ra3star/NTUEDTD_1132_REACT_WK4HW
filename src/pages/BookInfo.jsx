import { useParams } from "react-router";
import books from "../json/books.json"

import Header from "../components/Header";
import Footer from "../components/Footer";
import BookDetail from "../components/BookDetail";

function BookInfo(){
    const {productId}=useParams();
    const bookData=books.find(
        (x)=>(x.ID === Number(productId))
    );
    return(
        <div className="container main-layout min-h-screen mx-auto bg-base-100">
            <Header className="header" />
            {bookData?<BookDetail data={bookData} />:<p>NOT FOUND</p>}
            <Footer className="footer" />
        </div>
    );
}

export default BookInfo;