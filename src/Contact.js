import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function Contact() {
  const [data,setData]=useState({
    fullname:"",
    email:"",
    msg:"",
  });
  const InputEvent=(event) =>{
    const {name,value}=event.target;
    setData((preVal)=>{
      return {
        ...preVal,
        [name]:value,
      };
    });
  };
  const formSubmit =(e)=>{
    e.preventDefault();
    alert(
      'Hello '+data.fullname+" Thanks for Ur valuable Feedback"
      );
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Message{" "}
                </label>
                <textarea
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                 
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
