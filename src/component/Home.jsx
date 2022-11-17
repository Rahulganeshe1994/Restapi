import React from "react";
import Stud from "./Api";
const Home=()=>{
    return(
        <>
            <div className="card" style={{"width": "18rem"}}>
                <img src="https://wallpapercave.com/wp/wp2148273.jpg" className="card-img-top" alt="..." style={{marginTop:'100px'}}/>
                    <div className="card-body">
                    <h5 className="card-title">Apna sweets</h5>
                    <p className="card-text">french fries</p>
                        <a href="#" class="btn btn-primary">Oder Now</a>
                    </div>
            </div>
           <Stud/>
        </>
    )
}
export default Home;