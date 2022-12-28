import styles from "../../styles/Header/Header.module.css";
import Bar from "./Bar";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

export default function Header() {
    return (
        <div className={styles.HeaderWrper}>
            <div className={styles.HeaderContainer}>
                <HeaderTop />
                <HeaderBottom />
            </div>
            <Bar />
        </div>
    )
}
