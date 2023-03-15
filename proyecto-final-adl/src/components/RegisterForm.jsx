const RegisterForm = () => {

    return (
        <div  class="d-flex align-items-center justify-content-center bg-image">
        <div class="card text-center m-5"  style={{maxWidth: '600px'}}>
            <div class="card-body m-5 px-5">
                <h5 class="card-title text-uppercase text-center mb-5">CREATE ACCOUNT</h5>
                <div class="row g-2">
                    <div class="col-md mb-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" placeholder="name@example.com"/>
                            <label for="floatingInputGrid">First name</label>
                        </div>
                    </div>
                    <div class="col-md mb-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" placeholder="name@example.com"/>
                            <label for="floatingInputGrid">Last Name</label>
                        </div>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Repeat your password"/>
                    <label for="floatingPassword">Repeat your password</label>
                </div>

                <div class="d-grid gap-2">
                    <button type="button" class="fw-bold btn btn-primary btn-lg mb-3">Register</button>
                </div>
                
                <p class="card-text">Have already an account?  <a href="/" class="card-link text-reset fw-bold">Login here</a></p>
            </div>
            
        </div>
        </div>
    );
};

export default RegisterForm;