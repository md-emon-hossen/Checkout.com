import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from "../styles/Arrow.module.css";

export default function Arrow({ children }) {
    return (
        <div className={styles.ArrowWrp}>
            <div className={styles.arrowBtn}><AiFillCaretLeft /></div>
            <div className={styles.arrowBtn}><AiFillCaretRight /></div>
        </div>
    )
}
