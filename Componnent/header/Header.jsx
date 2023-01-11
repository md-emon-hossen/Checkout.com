import { UseAllContext } from "../../context/AllContext";
import styles from "../../styles/Header/Header.module.css";
import Loading from "../Loading";
import Bar from "./Bar";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
export default function Header() {

    const { loading } = UseAllContext();

    return (
        <div className={styles.HeaderWrper}>
            <div className={styles.HeaderContainer}>
                {loading && <Loading />}
                <HeaderTop />
                <HeaderBottom />
            </div>
            <Bar />
        </div>
    )
}
