import { Link } from "react-router";

function Header() {
    return (
        <header className="flex flex-col header pt-6 pb-2 mb-8 text-center shadow-md bg-base-200">
            <div className="container mx-auto flex justify-center items-center">
                <Link to="/" className="text-red-500 pt5 pb-2 text-3xl font-bold">
                    首頁
                </Link>
            </div>
        </header>
    );
}

export default Header;