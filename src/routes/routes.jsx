import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Home } from "../components/home/Home";
import { SignUp } from "../components/signup/SignUp";
import { use, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";

export function MyRoutes(){
    const [userName, setUserName] = useState([])
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayName)
            }
            else{
                setUserName("")
            }
        })
    },[])

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home name={userName} />}  />
                <Route  exact path="/login" element={<Login/>} />
                <Route exact path="/sign-up" element={<SignUp/>}  />
            </Routes>
        </Router>
    );
}