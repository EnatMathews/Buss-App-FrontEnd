import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'



const Login = () => {

const [data,changedata]=useState(
    {
        "user":"",
        "pass":"",
    }
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readvalue=()=>{
    console.log(data)
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

<img src="https://www.clipartkey.com/mpngs/m/96-965159_transparent-login-logo-clipart-png-download-my-account.png" alt="Logo" width="400" height="400" class="d-inline-block align-text-top" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<b>
<label htmlFor="" className="form-label">User Name</label></b>
<input type="text" className="form-control" name="uname" value={data.uname} onChange={inputHandler}/>

   
<b>
    <label htmlFor="" className="form-label">PassWord</label></b>
   <input type="password" name="pass" id="" className="form-control"  value={data.pass} onChange={inputHandler} />
   <br></br>
  

<center>
<button className="btn btn-warning" onClick={readvalue}><Link class="link" to="/Add">Login</Link></button>


<br></br>

<Link class="link" to="/s">New Users CliCk here</Link>
</center>
    </div>
    

   

    

    
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Login