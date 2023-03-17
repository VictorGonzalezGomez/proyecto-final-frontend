import Footer from "../components/Footer";
import Navbar from "../components/Navbar";




const RegisterGeneralPage = () => {



    return (
      <>
  
        <div id="hero-login" className="container col-xl-10 col-xxl-8">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-md-10 mx-auto col-lg-5">
              <div class="card">
                <h5 class="card-header">As A User</h5>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="/registeruser" class="btn btn-primary">Register</a>
                </div>
              </div>
            </div>

            <div className="col-md-10 mx-auto col-lg-5">
              <div class="card">
                <h5 class="card-header">As A Store</h5>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="/registerstore" class="btn btn-primary">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        </>
    );
};

export default RegisterGeneralPage;