import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'



const SignUp = () => {

const [data,changedata]=useState(
    {
         "name":"",
         "emaill":"",
         "phoneno":"",
         "gender":"",
         
         "password":"",
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

    <label htmlFor="" className="form-label">Email ID</label>
    <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
    </div>
    
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


    <label htmlFor="" className="form-label">Phone No</label>
    <input type="text" className="form-control" name="phoneno" value={data.phoneno} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Gender</label>
<select name="gender" id="" className="form-control">
    <option value="">Male</option>
    <option value="">Female</option>
    <option value="">Other</option>
</select>
</div>
    
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


    <label htmlFor="" className="form-label">Password</label>
    <input type="password" name="password" id="" className="form-control"  value={data.password} onChange={inputHandler} />

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