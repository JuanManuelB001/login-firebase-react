import { Link } from "react-router-dom";

export function Home(props){
    return(
        <div>
           <div>
             <h1>
                <Link to='/login'>
                Login
                </Link>
            </h1>
            <h2><Link to='/sign-up' >
            Register</Link></h2>
           </div>
           <p>{props.name? `Bienvenido ${props.name}`: `Login-int`}</p>
        </div>
    );
}