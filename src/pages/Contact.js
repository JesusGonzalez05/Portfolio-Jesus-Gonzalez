import React from 'react';
import '../App.css'

const Contact = () => {
  return (
    <div>
      <div id="contact-card" class=" card w-75 p-3 mx-auto">
        <div class="card-body">
          <div class="mb-3 row">
            <label for="Name" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input class="form-control" placeholder='Name'></input>
              </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
              <input type="Email" class="form-control" placeholder='Email@address.com' id="Email"></input>
              </div>
          </div> 
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" placeholder='Password' id="inputPassword"></input>
            </div>
          </div>
          <div class="input-group">
            <label for="textarea" class="col-sm-2 col-form-label">Say Hi!</label>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>       
        </div>
      </div>
    </div>
  );
}
export default Contact;
