import { AiFillCar } from "react-icons/ai";
import { CiAirportSign1 } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { MdAttractions, MdFlight } from "react-icons/md";
import styles from "../../styles/Header/HeaderTop.module.css";
import Container from "../Container";

export default function HeaderTop() {
    return (
        <Container>
            <div className={styles.topHeaderWrp}>
                <div className={styles.topHeader}>
                    <div>
                        <h3>Checkout.Com</h3>
                    </div>
                    <div>
                        <button className={styles.btn}>Register</button>
                        <button className={styles.btn}>Login</button>
                    </div>
                </div>
                <div className={styles.middleHeader}>
                    <div className={styles.active}><FaBed className={styles.icons} /> Stays</div>
                    <div><MdFlight className={styles.icons} />Flights</div>
                    <div><AiFillCar className={styles.icons} />Car Rentals</div>
                    <div><MdAttractions className={styles.icons} />Attractions</div>
                    <div><CiAirportSign1 className={styles.icons} />Airport Taxis</div>
                </div>
            </div>
        </Container>
    )
}
