import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-primary" to="/">
                        TechTales
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" smooth to="/#home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" smooth to="/#about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" smooth to="/#posts">
                                    Posts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" smooth to="/#categories">
                                    Categories
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
