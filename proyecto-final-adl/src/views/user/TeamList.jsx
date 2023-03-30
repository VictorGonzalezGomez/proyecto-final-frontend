const UserList = () => {

    return (
<>
<div class="col">

<div class="row">
  
    <div class="col-md-12">  
        <div class="card">
            <div class="card-body">
                <h1 class="card-title text-uppercase mb-0 text-center">Manage Your Team</h1>
            </div>
            <hr />
            <div class="table-responsive">
                <table class="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Name</th>
                   
                      <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Added</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Category</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="pl-4">1</td>
                      <td>
                          <h5 class="font-medium mb-0">Daniel Kristeen</h5>
                
                      </td>
                 
                      <td>
                          <span class="text-muted">daniel@website.com</span><br/>
                        
                      </td>
                      <td>
                          <span class="text-muted">15 Mar 1988</span><br/>
                       
                      </td>
                      <td>
                        <select class="form-control category-select" id="exampleFormControlSelect1">
                          <option>Modulator</option>
                          <option>Admin</option>
                          <option>User</option>
                          <option>Subscriber</option>
                        </select>
                      </td>
                      <td>
                      
                        <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                        <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>
</>
    )
}

export default UserList