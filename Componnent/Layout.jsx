import Header from '../Componnent/header/Header';
import styles from "../styles/Layout.module.css";
import Footer from './Footer';


export default function Layout({ children }) {

    return (
        <>
            <Header />
            <div className={styles.bodyWrp}>
                {children}
            </div>
            <Footer />
        </>
    )
}
