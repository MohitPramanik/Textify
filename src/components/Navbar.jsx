import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Spin as Hamburger } from "hamburger-react";

function Navbar() {
    return (
        <header>
            <nav
                className="navbar navbar-expand-lg navbar-dark text-center"
                style={{ background: "#7c2aff" }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                    <button
                        className="navbar-toggler me-3 border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <Hamburger />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to={""}
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/preview"} className="nav-link">
                                    PREVIEW
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
