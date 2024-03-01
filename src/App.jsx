import { useState } from "react";
import Register from "./components/Register";
import Home from "./components/Home";
import ViewAll from "./components/ViewAll";


export default function App() {
    const[component,setComponent]=useState(<Home/>);

   function setMenu(page){
        switch (page) {
            case 'home':{
              setComponent(<Home/>)
                break;
            }   
            case 'register':{
                setComponent(<Register/>); 
                break;
            }    
            case 'viewall':{
              setComponent(<ViewAll/>); 
              break;
          }          
               
        
            default:
                break;
        }
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item btn">
                                <a className="nav-link active" aria-current="page" 
                                onClick={()=>{setMenu('home')}}
                                >Home</a>
                            </li>
                            <li className="nav-item btn">
                                <a className="nav-link" 
                                onClick={()=>{setMenu('register')}}
                                >Register</a>
                            </li>
                            <li className="nav-item btn">
                                <a className="nav-link"
                                onClick={()=>{setMenu('viewall')}}
                                >View all student</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
          {component}
        </div>
    )
}