import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Home } from "../components/home/Home";

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}  />
            </Routes>
        </Router>
    );
}