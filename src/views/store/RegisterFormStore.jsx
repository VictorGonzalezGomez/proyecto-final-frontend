import { useState } from "react";
import axios from "axios";

const RegisterFormStore = () => {
  const EMAIL_REGEX = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const REGISTER_STORE_URL="";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]= useState("");


  const [storeName, setStoreName]= useState("");
  const [rut, setRut]= useState("");
  const [email, setEmail]= useState("");
  const [industry, setIndustry]= useState("");
  const [address, setAddress]= useState("");
  const [password, setPassword]= useState("");
  const [auxPassword, setAuxPassword]= useState("");
  const [errMsg, setErrMsg] = useState("");


  const handleSubmit = async (e) => {
   
    const validateEmailFormat = EMAIL_REGEX.test(email);
    const validatePasswordFormat = PWD_REGEX.test(password);

    if (!storeName || !rut || !email || !industry || !address || !password || !auxPassword){
      setErrMsg("All the fields are required ")
    }
    if (!validateEmailFormat || !validatePasswordFormat) {
      setErrMsg("The password or the email are not valid");
      return;
    }
    if (password !== auxPassword){
        setErrMsg("The password do not match");
        return;
    }
    try {
      const response = await axios.post(
          REGISTER_STORE_URL,
        { storeName, rut, email, industry, address, password }
      );
    
    setFirstName("");
    setLastName("");

    setStoreName("");
    setRut("");
    setIndustry("");
    setAddress("");
    setEmail("");
    setPassword("");
    setAuxPassword("");
       
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      }  else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
      
  <div  class="d-flex align-items-center justify-content-center bg-image">
    <div class="card text-center m-5"  style={{maxWidth: '600px'}}>
      <div class="card-body m-5 px-5">
        <h5 class="card-title text-uppercase text-center mb-5">CREATE USER ACCOUNT</h5>
        <div class="row g-2">
          <div class="col-md mb-3">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInputGridFirstname" placeholder="First name" onChange={(e)=> setFirstName(e.target.value)} />
              <label for="floatingInputGridFirstname">First name</label>
            </div>
          </div>
          <div class="col-md mb-3">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInputGridLastName" placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)}/>
              <label for="floatingInputGridLastName">Last Name</label>
            </div>
          </div>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value)}/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Repeat your password" onChange={(e)=> setAuxPassword(e.target.value)}/>
          <label for="floatingPassword">Repeat your password</label>
        </div>

          <h5 class="card-title text-uppercase text-center my-5">CREATE STORE ACCOUNT </h5>
        <div class="row g-2">
          <div class="col-md mb-3">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInputGridStoreName" placeholder="Store Name" onChange={(e)=> setStoreName(e.target.value)} />
              <label for="floatingInputGridStoreName">Store Name</label>
            </div>
            </div>
              <div class="col-md mb-3">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingInputGridRut" placeholder="RUT" onChange={(e)=> setRut(e.target.value)}/>
                  <label for="floatingInputGridRut">RUT</label>
                </div>
              </div>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value)}/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInputGridRut" placeholder="RUT" onChange={(e)=> setAddress(e.target.value)}/>
              <label for="floatingInputGridAddress">Address</label>
            </div>

            <select class="form-select  mb-3" aria-label="SelectIndustry">
              <option selected>Select your industry</option>
              <option>Commerce</option>
              <option>Food;Drink</option>
              <option>Other</option>
            </select>

            <div class="d-grid gap-2">
              <button type="button" class="fw-bold btn btn-primary btn-lg mb-3" onClick={handleSubmit}>Register</button>
            </div>
            <p class="card-text">Have already an account?  <a href="/" class="card-link text-reset fw-bold">Login here</a></p>
        </div>
    </div>
  </div>

  );
};

export default RegisterFormStore;