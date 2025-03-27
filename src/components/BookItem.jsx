import { Link } from "react-router";

function BookItem({ item }) {
    return (
        <section key={item.ID} className="grid gap-6">
            <div className="bg-base-300 shadow-xl p-4 m-2">
                <img className="w-full" src={"/src" + item.cover} alt={item.title} />
                <div className="flex flex-col gap-2 p-4 text-left text-base-content">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-gray-500">Author: {item.author}</p>
                    <p className="line-clamp-3">{item.summary}</p>
                    <div className="flex flex-wrap justify-between">
                        <Link className="flex items-center" to={`/products/id/${item.ID}`}>
                            <p>See more</p>
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </Link>
                        <span class="inline-flex mr-2 items-center leading-none text-lg font-bold">15</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookItem;