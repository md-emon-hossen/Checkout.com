import { UseAllContext } from "../../context/AllContext";
import styles from "../../styles/Header/OtherPageHeader.module.css";
import Loading from "../Loading";
import HeaderTop from './HeaderTop';

export default function OtherPageHeader() {

    const { loading } = UseAllContext();

    return (
        <div className={styles.headerDesign}>
            {loading && <Loading />}
            <HeaderTop />
        </div>
    )
}
