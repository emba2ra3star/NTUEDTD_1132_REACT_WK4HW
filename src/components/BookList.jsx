import { Link } from "react-router";

function BookList() {
    return (
        <>
        <section className="grid gap-6">
            <div className="bg-base-300 shadow-xl p-4 m-2">
                <Link to="/">
                    <img className="w-full" src="./src/images/book1.png" alt="The Great Gatsby" />
                    <h2 className="text-base-content text-lg font-bold">Book Title</h2>
                    <p className="text-base-content">Author: John Doe</p>
                </Link>
            </div>
        </section>
        </>
    );
}

export default BookList;