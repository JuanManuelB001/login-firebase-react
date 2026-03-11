import { Link } from "react-router-dom";
import styles from "../../css/login.module.css"

export function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>
                    Login
                </h1>
                <div className={styles.footer}>
                    <b className={styles.error}>Error</b>
                    <button>Login btn</button>
                    <p>Crear Cuenta<span><Link to="/sign-up">Registrar</Link></span></p>

                </div>
            </div>
        </div>
    );
}