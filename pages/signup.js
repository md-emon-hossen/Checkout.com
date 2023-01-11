import Link from "next/link";
import Loading from "../Componnent/Loading";
import { UseAllContext } from "../context/AllContext";
import styles from "../styles/Login.module.css";

export default function signup() {

    const { loading } = UseAllContext();

    return (
        <div className={styles.loginWrp}>
            {loading && <Loading />}
            <div className={styles.contanWrp}>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Frist Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Country" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="confrime Password" />
                <button>Sign Up</button>
                <p>Have an Account ? <Link href="/login">Login</Link></p>
            </div>
        </div>
    )
}


signup.getLayout = function getLayout(page) {
    return (
        <>
            {page}
        </>
    )
}