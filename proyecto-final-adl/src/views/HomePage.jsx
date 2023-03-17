import analyticsImage from "../assets/img/analytics-people.png";
import HeroLogin from "../components/HeroLogin";


const HomePage = () => {
    return (
        <>
        
            {/* Login hero section */}
            <HeroLogin />
            {/* end login hero section */}

            {/* features 1 section */}
            <div id="features-1" className="container">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">
                            Border hero with cropped image and shadows
                        </h1>
                        <p className="lead">
                            Quickly design and customize responsive mobile-first
                            sites with Bootstrap, the world’s most popular
                            front-end open source toolkit, featuring Sass
                            variables and mixins, responsive grid system,
                            extensive prebuilt components, and powerful
                            JavaScript plugins.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                            >
                                Primary
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg px-4"
                            >
                                Default
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img
                            className="img-fluid"
                            src={analyticsImage}
                            alt=""
                            width="720"
                        />
                    </div>
                </div>
            </div>

            {/* end features 1 section */}

            {/* features 2 section */}
            <div id="features-2" className="container">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
                    <div className="col-lg-5">
                        <img
                            className="img-fluid"
                            src={analyticsImage}
                            alt=""
                            width="720"
                        />
                    </div>
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">
                            Border hero with cropped image and shadows
                        </h1>
                        <p className="lead">
                            Quickly design and customize responsive mobile-first
                            sites with Bootstrap, the world’s most popular
                            front-end open source toolkit, featuring Sass
                            variables and mixins, responsive grid system,
                            extensive prebuilt components, and powerful
                            JavaScript plugins.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                            >
                                Primary
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg px-4"
                            >
                                Default
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* end features 2 section */}

            {/* features */}
            <div id="system-features" className="p-5 mb-4 bg-light rounded-3">
                <div className="container">
                    <div className="container-fluid py-1">
                        <h1 className="display-5 fw-bold text-center">
                            Features
                        </h1>
                        <p className="fs-4 text-center">A modern system</p>
                    </div>

                    <div className="container" id="featured-3">
                        <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
                            <div className="feature col">
                                <div className="text-center">
                                    <i className="fa fa-user fa-2xl"></i>
                                    <h3 className="fs-2">Featured title</h3>
                                    <p>
                                        Paragraph of text beneath the heading to
                                        explain the heading. We'll add onto it
                                        with another sentence and probably just
                                        keep going until we run out of words.
                                    </p>
                                </div>
                            </div>
                            <div className="feature col">
                                <div className="text-center">
                                    <i className="fa fa-chart-simple fa-2xl"></i>
                                    <h3 className="fs-2">Featured title</h3>
                                    <p>
                                        Paragraph of text beneath the heading to
                                        explain the heading. We'll add onto it
                                        with another sentence and probably just
                                        keep going until we run out of words.
                                    </p>
                                </div>
                            </div>
                            <div className="feature col">
                                <div className="text-center">
                                    <i className="fa fa-computer fa-2xl"></i>
                                    <h3 className="fs-2">Featured title</h3>
                                    <p>
                                        Paragraph of text beneath the heading to
                                        explain the heading. We'll add onto it
                                        with another sentence and probably just
                                        keep going until we run out of words.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end features */}

            {/* jumbotron 2 */}
            <div id="pricing" className="p-5 mb-4 bg-light rounded-3">
                <div className="container">
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal">Pricing</h1>
                        <p className="fs-5 text-muted">
                            Quickly build an effective pricing table for your
                            potential customers with this Bootstrap example.
                            It’s built with default Bootstrap components and
                            utilities with little customization.
                        </p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Trial</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        $0
                                        <small className="text-muted fw-light">
                                            /mo
                                        </small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button
                                        type="button"
                                        className="w-100 btn btn-lg btn-outline-primary"
                                    >
                                        Sign up for free
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 border-primary shadow-sm">
                                <div className="card-header text-bg-primary border-primary py-3">
                                    <h4 className="my-0 fw-normal">Pro</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        $15
                                        <small className="text-muted fw-light">
                                            /mo
                                        </small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>20 users included</li>
                                        <li>10 GB of storage</li>
                                        <li>Priority email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button
                                        type="button"
                                        className="w-100 btn btn-lg btn-primary"
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm ">
                                <div className="card-header py-3 ">
                                    <h4 className="my-0 fw-normal">Enterprise</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        $29
                                        <small className="text-muted fw-light">
                                            /mo
                                        </small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>30 users included</li>
                                        <li>15 GB of storage</li>
                                        <li>Phone and email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button
                                        type="button"
                                        className="w-100 btn btn-lg btn-primary"
                                    >
                                        Contact us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end jumbotron 2 */}

            {/* features 3 section */}
            <div id="features-3" className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">
                            Border hero with cropped image and shadows
                        </h1>
                        <p className="lead">
                            Quickly design and customize responsive mobile-first
                            sites with Bootstrap, the world’s most popular
                            front-end open source toolkit, featuring Sass
                            variables and mixins, responsive grid system,
                            extensive prebuilt components, and powerful
                            JavaScript plugins.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                            >
                                Primary
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg px-4"
                            >
                                Default
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img
                            className="img-fluid"
                            src={analyticsImage}
                            alt=""
                            width="720"
                        />
                    </div>
                </div>
            </div>

            {/* end features 3 section */}
            
        </>
    );
};

export default HomePage;
