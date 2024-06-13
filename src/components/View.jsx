import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const [data, changeData] = useState([])
   

    const fetchData = () => {
        axios.get("http://localhost:8888/View")
            .then(response => {
                console.log(response.data)
                changeData(response.data)
               
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            }).finally()
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div>
        <Nav/>
         <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table table-bordered border-primary">
                   
  <thead>
    <tr>
      
      <th scope="col">Bus Name</th>
      <th scope="col">Route</th>
      <th scope="col">Bus No</th>
      <th scope="col">Driver Name</th>
      
      
      
    </tr>
  </thead>
  <tbody>
  {
        data.map(
            (value,index)=>{
                return  <tr>
               
                <td>{value.busname}</td>
                <td>{value.route}</td>
                <td>{value.busno}</td>
                <td>{value.drivername}</td>
                
               
                
              </tr>
            }
            
        )
    }
   
  </tbody>
</table>







                    </div>
                    
                    </div>
                    
                    </div>
    </div>
  )
}

export default View