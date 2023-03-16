import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <h1>Logo</h1>
                    </a>
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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a> */}

                                <NavLink className="nav-link" to="/" end>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about-us">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/features">
                                    Features
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">
                                    Pricing
                                </a>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    id="navbar-total"
                                    to="/faq"
                                >
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
