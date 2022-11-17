import React from "react";
import{useState,useEffect} from "react";
import axios from "axios";
const Stud= () => {
    var [sid,updatesid]=useState();
    var [data,updatedata]=useState([]);
    var [pro,updatepro]=useState({id:'',first_name:'',last_name:'',email:'',branch:'',roll:0,username:'',password:'',year:''});
    useEffect(
        function ()
        {
            async function getdata()
            {
                var api=await axios.get(`http://restp.herokuapp.com/student/`);
                 updatedata(api.data);
            }
            getdata();
        }
    );
    function changeval(e)
    {
        updatesid(e.target.value);
    }
    const prochange=(e)=>{
        updatepro({...pro,[e.target.name]:e.target.value});
    }
    return (
        <>
        <h1 style={{marginTop:"100px"}}>Student Reecord </h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(pro.id==='')
            {
             async function addpro()
            {
                var api = await axios.post("http://restp.herokuapp.com/student/", { first_name:pro.first_name, last_name:pro.last_name, email:pro.email, branch:pro.branch, roll:pro.roll, username:pro.username, password:pro.password, year:pro.year });
                if(api.status===201)
                {
                    alert("Student added successfully");
                }
            }
            addpro();
        }
         else
        {
           async function updatepro()
         {
          var api = await axios.put(`http://restapittt.herokuapp.com/student/${pro.id}/`,pro);
          if (api.status === 200)
           {
            alert("Student Record Update Successfully")
          }
        }
         updatepro();
      }
      updatepro({id:'',first_name:'',last_name:'',email:'',branch:'',roll:0,username:'',password:'',year:''});  
        
        }} className=" ">
            <label>Fisrt Name</label><input type="text" name="first_name" value={pro.first_name} onChange={prochange}/><br/>
            <label>Last Name</label><input type="text" name="last_name" value={pro.last_name} onChange={prochange}/><br/>  
            <label>Email   </label><input type="email" name="email" value={pro.email} onChange={prochange} /><br/>
            <label>Branch</label><input type="text" name="branch" value={pro.branch} onChange={prochange} /><br />
            <label>Roll No</label><input type="text" name="roll" value={pro.roll} onChange={prochange} /><br />
            <label>User Name</label><input type="text" name="username" value={pro.username} onChange={prochange} /><br />
            <label>Password</label><input type="password" name="password" value={pro.password} onChange={prochange} /><br />
            <label>Year</label><input type="text" name="year" value={pro.year} onChange={prochange} /><br />

            <button className="btn btn-success" name="b1">Add  Student</button>
            <button className="btn btn-success" name="b2">Update
             Record</button>

            </form>
        <input type="number" name='sid' value={sid} onChange={changeval} />
        <button onClick={()=>{
           async function Search()
           {
               var api = await axios.get(`http://restp.herokuapp.com/student/${sid}/`);
               updatedata([api.data]);
             }
             Search();

        }}>Search</button>
        <table className="table table-boardered table-center text-info bg-dark">
            <thead>
            <tr className="text-warning">
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Branch</th>
                    <th>Roll No.</th>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Year</th>
            </tr>
            </thead>
            <tbody>
                {data.map((v)=>{
                    return(
                        <>
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.first_name}</td>
                            <td>{v.last_name}</td>
                            <td>{v.email}</td>
                            <td>{v.branch}</td>
                            <td>{v.roll}</td>  
                            <td>{v.username}</td>
                            <td>{v.password}</td>
                            <td>{v.year}</td>
                            <td></td>
                            <td><button className="btn btn-danger" onClick={()=>{
                                async function delpro()
                                {
                                    var api = await axios.delete(`http://restp.herokuapp.com/student/${v.id}/`);
                                    if(api.status===204)
                                    {
                                        alert("Student Data Deleted");
                                    }
                                }
                                delpro();
                            }}>Delete</button></td>
                            <td><button className="btn btn-success" onClick={()=>{
                                updatepro(v);
                            }}>Update</button></td>
                        </tr>
                        </>
                    )
                })}
        
            </tbody>
        </table>
        </>
    )
}
export default Stud;