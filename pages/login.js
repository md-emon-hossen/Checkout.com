import Link from "next/link";
import { useState } from "react";
import Loading from "../Componnent/Loading";
import { UseAllContext } from "../context/AllContext";
import styles from "../styles/Login.module.css";

export default function login() {

    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const { loading } = UseAllContext();

    async function handleClick(e) {
        e.preventDefault();

        const signinObject = {
            pass,
            email
        }

        if (pass === "" || email === "") {
            alert("Enter something");
        } else {
            console.log(signinObject);
        }
    }






    return (
        <div className={styles.loginWrp}>
            {loading && <Loading />}
            <div className={styles.contanWrp}>
                <h2>Login</h2>
                <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" />
                <input onChange={(e) => setpass(e.target.value)} type="password" placeholder="Password" />
                <button onClick={(e) => handleClick(e)}> Login</button>
                <p>Haven&apos;t an Account ? <Link href="/signup">Sign Up</Link></p>
                <p className={styles.forget}><Link href="/">Forget Password</Link></p>
            </div>
        </div >
    )
}


login.getLayout = function getLayout(page) {
    return (
        <>
            {page}
        </>
    )
}