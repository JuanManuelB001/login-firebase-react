import styles from "../../css/signUp.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../inputControl/InputControl";

export function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", passwd: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const registro = () => {
    if (!values.name || !values.email || !values.passwd) {
      setErrorMsg("Lleno todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.passwd)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;

        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(error.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading} >Register</h1>
        <InputControl label="Name" placeholder="Enter Name"  type="text" onChange={(event)=> setValues((prev)=>({...prev, name:event.target.value})) } />
        <InputControl label="Email" type="email" placeholder="Enter Email" onChange={(event)=> setValues((prev)=>({...prev, email:event.target.value})) } />
        <InputControl label="Password" placeholder="Enter password" type="password" onChange={(event)=> setValues((prev)=> ({...prev, passwd:event.target.value}))} />
        <div className={styles.footer}>
          <b className={styles.error} >{errorMsg}</b>
          <button onClick={registro} disabled={submitButtonDisabled}>Register</button>
          <p>
            Si ya tienes una cuenta 
            <span><Link to="/login">
            Iniciar Sesion</Link></span>
          </p>
        </div>
      </div>
      
    </div>
  );
}
