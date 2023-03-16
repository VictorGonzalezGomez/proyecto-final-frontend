import React from "react";
import axios from "axios";
import { AuthContex } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const HeroLogin = () => {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { setIsAuth, setAuthUser } = React.useContext(AuthContex);

    const navigate = useNavigate();

    const login = async () => {
        try {
            const accessuser = await axios.post(
                "https://backend-test-production-090d.up.railway.app/login",
                {
                    email: userName,
                    password: password,
                }
            );
            console.log(accessuser);

            swal({
                title: "Success",
                text: "You are logged in",
                icon: "success",
                button: "Ok",
            });
            setTimeout(() => {
                swal.close();
            }, 2000);

            localStorage.setItem("tk", accessuser.data.token);
            setIsAuth(true);

            setAuthUser({
                email: userName,
                password: password,
            });
            navigate("/gallery");
        } catch (error) {
            console.log(error);
            swal({
                title: "Error",
                text: "Invalid credentials",
                icon: "error",
                button: "Ok",
            });
        }
    };

    // mail validator function
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleLogin = () => {
        // check email validation
        if (!validateEmail(userName)) {
            swal({
                title: "Error",
                text: "Please enter a valid email",
                icon: "error",
                button: "Ok",
            });

            return;
        }
        // all fields are required
        if (userName === "" || password === "") {
            swal({
                title: "Error",
                text: "Please fill all the fields",
                icon: "error",
                button: "Ok",
            });
        } else {
            login();
        }
    };

    return (
        <div id="hero-login" className="container col-xl-10 col-xxl-8">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">
                        Vertically centered hero sign-up form
                    </h1>
                    <p className="col-lg-10 fs-4">
                        Below is an example form built entirely with Bootstrap’s
                        form controls. Each required form group has a validation
                        state that can be triggered by attempting to submit the
                        form without completing it.
                    </p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" />{" "}
                            Remember me
                        </label>
                    </div>
                    <button
                        className="w-100 btn btn-lg btn-primary"
                        onClick={handleLogin}
                    >
                        Sign in
                    </button>
                    <hr className="my-4" />
                    <a
                        class=" w-100 btn btn btn-lg btn-outline-success"
                        href="/register"
                        role="button"
                    >
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroLogin;
