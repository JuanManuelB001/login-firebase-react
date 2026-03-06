import styles from "../../css/signUp.module.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function SignUp(){
    return(
        <div className={styles.container}>
            Register
        </div>
    );
}