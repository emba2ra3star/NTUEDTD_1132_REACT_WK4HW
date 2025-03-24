import { Link } from "react-router";

function Header() {
    return (
        <header className="flex flex-col header text-center">
            <div className="container mx-auto flex justify-center items-center">
                <Link to="/" className="text-white pt5 pb-2 text-3xl font-bold">
                    首頁
                </Link>
            </div>
        </header>
    );
}

export default Header;