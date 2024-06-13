import React, { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

const Add = () => {
    const [data, setData] = useState({
        busname: "",
        route: "",
        busno: "",
        drivername: ""
       
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8888/Add",data)
        .then(response => {
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Successfully")
                
            } else {
                alert("Error")
                
            }
            console.log(response.data)
            setData(response.data)
           
        })
        .catch(error => {
            console.log(error);
            alert(error.message);
        })
    }

    return (
        <div>
            <Nav />
            <div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="firstname" className="form-label">Bus Name</label>
                                <input type="text" className="form-control" name='busname' value={data.busname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="lastname" className="form-label">Route</label>
                                <input type="text" className="form-control" name='route' value={data.route} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="lastname" className="form-label">Driver Name</label>
                                <input type="text" className="form-control" name='drivername' value={data.drivername} onChange={inputHandler} />
                            </div>
                            
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            
    );
};

export default Add;