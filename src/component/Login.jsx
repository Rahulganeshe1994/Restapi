import React from "react";
import { useNavigate,useParams } from "react-router-dom";
const Login = () => {
    let obj=useParams();
    let nav=useNavigate();
    if(obj.uid==="admin"&& obj.pass==="12345")
    {
        nav("/");
    }
    else
    {
        alert("Invalid")
    }
    // {
    //    alert("Invali id password");
    // }
    //   let navigate = useNavigate();
    // function Submit(e)
    // {
    //     if(e.target.id==="admin"&& e.target.pass==="12345")
    //     {
    //         navigate("/")
    //     }
       
    // }
    return(
        <>
          <div className="">
            <form className="form-group bg-dark text-center  text-info" style={{marginTop:"300px",height:"200px",width:"200px", marginLeft:"500px"}}>
                <label>Id</label>
                <input className="" type="text" name="n1" id="n1"/>
                <label>Password</label>
                 <input type="password" name="pass" id="pass"/>
                 <button className="btn btn-success"  >Login</button>
                </form>
          </div>
        </>
    )
}
export default Login;