import styles from "../../css/signUp.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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
    createUserWithEmailAndPassword(getAuth, values.email, values.passwd)
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
      </div>
      
    </div>
  );
}
