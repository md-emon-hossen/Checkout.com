import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "../../Componnent/Loading";
import { UseAllContext } from "../../context/AllContext";
import styles from "../../styles/Login.module.css";

export default function valified() {

    const { loading, setloading } = UseAllContext();
    const [otp, setotp] = useState('');
    const router = useRouter();





    async function handleClick(e) {
        e.preventDefault();


        if (otp === "") {
            alert("Enter OTP");
        } else {
            setloading(true);
            const response = await fetch(`/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ otp })

            });
            const res = await response.json();
            console.log(res);
            setloading(false);
            router.push('/');
        }

    }




    return (
        <div className={styles.loginWrp}>
            {loading && <Loading />}
            <div className={styles.contanWrp}>
                <h2>OTP Varification</h2>
                <input onChange={(e) => setotp(e.target.value)} type="number" placeholder="OTP" />
                <button onClick={(e) => handleClick(e)}>varifiy</button>
            </div>
        </div>
    )
}


valified.getLayout = function getLayout(page) {
    return (
        <>
            {page}
        </>
    )
}