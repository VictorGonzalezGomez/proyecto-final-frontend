

const Profile = () => {



    return (
      
<form class="m-5 align-items-center">

    <legend class="fs-2">Profile settings.</legend>
    <div class="row">
        <label for="staticEmail" class="col-sm-2 col-form-label fw-bold">First Name:</label>
        <div class="col">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="first name example"/>
        </div>
        <label for="staticEmail" class="col-sm-2 col-form-label fw-bold">Last Name:</label>
        <div class="col">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="last name example"/>
        </div>
        
    </div>
     <label for="inputStoreName" class="form-label fw-bold">Rol</label>
    <div class="col">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="last name example"/>
    </div>
    <div class="mb-3 mt-3 row">
        <label for="inputEmail" class="form-label fw-bold">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com"/>
        </div>
    </div>

   

    <legend class="my-2 fs-2">Store settings.</legend>

    <div class="col-md-6">
        <label for="inputStoreName" class="form-label fw-bold">Store name</label>
        <input type="text" class="form-control" id="inputStoreName"/>
    </div>
    <div class="col-md-3">
        <label for="inputRUT" class="form-label fw-bold">RUT</label>
        <input type="text" class="form-control" id="inputRUT"/>
    </div>
    <div class="col-md-4">
        <label for="inputIndustry" class="form-label fw-bold">Industry</label>
        <select id="inputIndustry" class="form-select">
            <option selected>Choose...</option>
            <option>Commerce</option>
            <option>Food;Drink</option>
        </select>
    </div>
    <div class="col-md-6">
        <label for="inputAddress" class="form-label fw-bold">Address</label>
        <input type="text" class="form-control" id="inputAddress"/>
    </div>
    <div class="col-12 my-4">
        <button type="submit" class="btn btn-primary">Save</button>
    </div>
</form>

    );
};

export default Profile;