function BookDetail({ data }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
            <div className="lg:col-start-3 lg:col-span-6">
                <img className="w-full" src="/src/images//book2.png" />
            </div>
            <div className="lg:col-span-14 text-left">
                <h1 className="text-white text-2xl font-bold mb-2">{data.title}</h1>
                <h2 className="text-white opacity-40 mb-1 text-lg">{data.author}</h2>
                <p className="text-white opacity-60 text-base mb-4">{data.summary}</p>
                {/* 價格與按鈕 */}
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold">US${data.price}.00</p>
                    <button className="btn btn-luxury px-8 py-5">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;