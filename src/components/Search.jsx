import React, { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState({ busno: '' });
  const [result, setResult] = useState([]);

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const Delete = (id) => {
    let input = { "_id": id };
    axios.post("http://localhost:8888/Delete", input)
      .then(response => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Successfully Deleted");
          // Remove the deleted item from the result array
          setResult(result.filter(item => item._id !== id));
        } else {
          alert("Error");
        }
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  };

  const readValue = () => {
    console.log(data);
    axios.post("http://localhost:8888/Search", data)
      .then(response => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Bus No</label>
                <input type="text" className="form-control" name='busno' value={data.busno} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-warning" onClick={readValue}>Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h3>Search Results:</h3>
            <table className="table">
              <thead>
                <tr>
                <th scope="col">Bus Name</th>
      <th scope="col">Route</th>
      <th scope="col">Bus No</th>
      <th scope="col">Driver Name</th>
      
                </tr>
              </thead>
              <tbody>
                {result.map((value, index) => (
                  <tr>
                    <td>{value.busname}</td>
                    <td>{value.route}</td>
                    <td>{value.busno}</td>
                    <td>{value.drivername}</td>
                    
                    <td>
                      <button className="btn btn-danger" onClick={() => Delete(value._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
