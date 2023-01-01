import React from 'react';
import '../App.css'

const Contact = () => {
  return (
    <div>
      <div id="contact-card" className=" card w-75 p-3 mx-auto">
        <div className="card-body">
          <div className="mb-3 row">
            <label for="Name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input className="form-control" placeholder='Name'></input>
              </div>
          </div>
          <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
              <input type="Email" className="form-control" placeholder='Email@address.com' id="Email"></input>
              </div>
          </div> 
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" placeholder='Password' id="inputPassword"></input>
            </div>
          </div>
          <div className="input-group">
            <label for="textarea" className="col-sm-2 col-form-label">Say Hi!</label>
            <div className="col-sm-10">
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
          </div> 
          <button id="submit-btn" type="button" className="btn btn-dark btn-sm">Submit</button>      
        </div>
      </div>
    </div>
  );
}
export default Contact;
