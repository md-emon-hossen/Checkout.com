import Link from "next/link";
import Loading from "../Componnent/Loading";
import { UseAllContext } from "../context/AllContext";
import styles from "../styles/Login.module.css";

export default function login() {

    const { loading } = UseAllContext();
    console.log(Loading);
    return (
        <div className={styles.loginWrp}>
            {loading && <Loading />}
            <div className={styles.contanWrp}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <p>Haven&apos;t an Account ? <Link href="/signup">Sign Up</Link></p>
                <p className={styles.forget}><Link href="/">Forget Password</Link></p>
            </div>
        </div>
    )
}


login.getLayout = function getLayout(page) {
    return (
        <>
            {page}
        </>
    )
}