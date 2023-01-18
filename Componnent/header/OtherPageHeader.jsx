import { UseAllContext } from "../../context/AllContext";
import styles from "../../styles/Header/OtherPageHeader.module.css";
import BigPhoto from "../home/BigPhoto";
import Loading from "../Loading";
import HeaderTop from './HeaderTop';

export default function OtherPageHeader() {

    const { loading, openBigPhoto } = UseAllContext();

    return (
        <div className={styles.headerDesign}>
            {loading && <Loading />}
            {openBigPhoto && <BigPhoto />}
            <HeaderTop />
        </div>
    )
}
