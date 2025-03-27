import BookItem from "./BookItem";
import books from "../json/books.json"

function BookList() {
    return (
        <main className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mx-[20%]">
            {books.map((item) => (
                <BookItem key={item.ID} item={item} />
            ))}
        </main>

    );
}

export default BookList;