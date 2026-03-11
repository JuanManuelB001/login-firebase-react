import { Link, useNavigate } from "react-router-dom";
import styles from "../../css/login.module.css"
import { InputControl } from "../inputControl/InputControl";
import { useState } from "react";
import { auth } from "../../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login(){
    const [values, setValues] = useState({email:"", passwd:""});
    const navigative = useNavigate();
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const loguarse = ()=>{
        if(!values.email || !values.passwd){
            setErrorMsg("Datos Incompletos")
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth, values.email, values.passwd).then((async(res)=>{
            setSubmitButtonDisabled(false)
            navigative("/")
        })).catch((err)=>{
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)
        }) 
    }
    return(
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>
                    Login
                </h1>
                <InputControl label="Email" placeholder ="Enter Email" onChange={(event) => setValues((prev) => ({...prev, email:event.target.value}))} />
                <InputControl label="Password" placeholder= "Enter Password" onChange={(event) => setValues((prev) => ({...prev, passwd:event.target.value}))} />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <p>Crear Cuenta<span><Link to="/sign-up">Registrar</Link></span></p>
                    <div className={styles.footer}>
                        <b className={styles.error} >{errorMsg}</b>
                        <button onClick={loguarse} disabled={submitButtonDisabled} >Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}