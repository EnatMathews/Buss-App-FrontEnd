import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'



const SignUp = () => {

const [data,changedata]=useState(
    {
         "name":"",
         "dobb":"",
         "blood":"",
         "mob":"",
         "addd":"",
         "pin":"",
         "dir":"",
         "place":"",
         "emaill":"",
         "user":"",
         "pass":"",
         "conf":"",
    }
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    if (data.pass == data.conf) {
    axios.post("http://localhost:8888/Login",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success") {
                alert("successfully added")
                
            } else {
                alert("error")
                
            }
        }
    )}

     else {
        alert("password and conformation password are not same")
    }

   
}

  return (
    <div>
<Navbar/>
<br></br>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Date Of Birth</label>
    <input type="date" name="dobb" id="" className="form-control" value={data.dobb} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">BloodGroup</label>
    <select name="blood" id="" className="form-control" value={data.blood} onChange={inputHandler} >
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
    </select>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">Mobile No</label>
    <input type="text" className="form-control" name="mob" value={data.mob} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


    <label htmlFor="" className="form-label">Address</label>
    <textarea name="addd" id="" className="form-control" value={data.addd} onChange={inputHandler} ></textarea>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">PinCode</label>
    <input type="text" className="form-control" name="pin" value={data.pin} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">District</label>
    <select name="dir" id="" className="form-control" value={data.dir} onChange={inputHandler} >
        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
        <option value="Kollam">Kollam</option>
        <option value="Pathanamthitta">Pathanamthitta</option>
        <option value="Alappuzha">Alappuzha</option>
        <option value="Kottayam">Kottayam</option>
        <option value="Idukki">Idukki</option>
        <option value="Ernakulam">Ernakulam</option>
        <option value="Thrissur">Thrissur</option>
        <option value="Palakkad">Palakkad</option>
        <option value="Malappuram">Malappuram</option>
        <option value="Kozhikode">Kozhikode</option>
        <option value="Wayanad">Wayanad</option>
        <option value="Kannur">Kannur</option>
        <option value="Kasaragod">Kasaragod</option>
    </select>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">Place</label>
    <input type="text" className="form-control" name="place" value={data.place} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">EmailId</label>
    <input type="text" className="form-control" name="emaill" value={data.emaill} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">UserName</label>
    <input type="text" className="form-control" name="user" value={data.user} onChange={inputHandler} />


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


    <label htmlFor="" className="form-label">Password</label>
    <input type="password" name="pass" id="" className="form-control"  value={data.pass} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


    <label htmlFor="" className="form-label">Conformation Password</label>
    <input type="password" name="conf" id="" className="form-control"  value={data.conf} onChange={inputHandler} />

    </div>
    <center>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<button className="btn btn-success" onClick={readValue}>SignUp</button>

    </div>

    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <Link  class="link" to="/">Back To Login</Link>


    </div>
    </center>
</div>

        </div>

        
    </div>
</div>

    </div>
  )
}

export default SignUp