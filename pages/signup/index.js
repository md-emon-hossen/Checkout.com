import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "../..//Componnent/Loading";
import { UseAllContext } from "../../context/AllContext";
import styles from "../../styles/Login.module.css";

export default function signup() {

    const { loading, setloading } = UseAllContext();
    const router = useRouter();
    const [fristName, setfristName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [country, setcountry] = useState('');
    const [pass, setpass] = useState('');
    const [conpass, setconpass] = useState('');




    async function handleClick(e) {
        e.preventDefault();
        const signUpobject = {
            fristName,
            lastName,
            email,
            country,
            pass,
            conpass
        }

        if (fristName === "" || lastName === "" || email === "" || conpass === "" || country === "" || pass === "") {
            alert("some all From");
        } else {
            setloading(true);
            const response = await fetch(`/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signUpobject)

            });
            const res = await response.json();
            console.log(res);
            setloading(false);
            router.push("/signup/varified");

        }

    }




    return (
        <div className={styles.loginWrp}>
            {loading && <Loading />}
            <div className={styles.contanWrp}>
                <h2>Sign Up</h2>
                <input onChange={(e) => setfristName(e.target.value)} type="text" placeholder="Frist Name" />
                <input onChange={(e) => setlastName(e.target.value)} type="text" placeholder="Last Name" />
                <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" />
                <input onChange={(e) => setcountry(e.target.value)} type="text" placeholder="Country" />
                <input onChange={(e) => setpass(e.target.value)} type="password" placeholder="Password" />
                <input onChange={(e) => setconpass(e.target.value)} type="password" placeholder="confrime Password" />
                <button onClick={(e) => handleClick(e)}>Sign Up</button>
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