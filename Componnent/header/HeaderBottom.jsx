import styles from "../../styles/Header/HeaderBottom.module.css";
import Container from "../Container";

export default function HeaderBottom() {
    return (
        <Container>
            <div className={styles.lastHeader}>
                <h1>Find your next stay</h1>
                <p>
                    Search deals on hotels, homes, and much more...<br />
                    Get Rewarded for your travels- Unlock  instance saving 10% or more with a free HotelBooking account.</p>
                <button>Sign in / Register</button>
            </div>
        </Container>
    )
}
