import React, { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

const Add = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        college: "",
        dob: "",
        course: "",
        mobile: "",
        email: "",
        address: ""
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
                <div class="row g-3">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="http://3.bp.blogspot.com/-ofYEHJ5kMzc/UcMbHjOI-vI/AAAAAAAAAOc/9Vb6WL1xcb8/s1600/552759_357559930979547_1989736932_n.jpg"
                                        class="d-block w-100" alt="..." height="450"  />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://images.static-collegedunia.com/public/college_data/images/appImage/13462_FISAT_NEW.jpg"
                                        class="d-block w-100" alt="..." height="450"  />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://fisat.ac.in/wp-content/uploads/2022/06/mca1-scaled-e1658138621201.jpeg"
                                        class="d-block w-100" alt="..." height="450"  />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    </div>
            </div>
            </div><br></br>
            
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="college" className="form-label">College</label>
                                <textarea name="college" className="form-control" value={data.college} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="dob" className="form-label">DOB</label>
                                <input type="date" name="dob" className="form-control" value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="course" className="form-label">Course</label>
                                <select name="course" className="form-control" value={data.course} onChange={inputHandler}>
                                    <option value="">Select Course</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="MBA">MBA</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="mob" className="form-label">Mobile NO</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="email" className="form-label">Email ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="add" className="form-label">Address</label>
                                <textarea name="address" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            
    );
};

export default Add;