import Link from "next/link";
import Container from "../Componnent/Container";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footerWrp}>
            <div className={styles.scribeWrp}>
                <div className={styles.scribe}>
                    <h1>Save Time, Save Money!</h1>
                    <p>Sign Up and We&apos;ll send the best deal to you</p>
                    <div>
                        <input type="email" placeholder="Your Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <Container>
                    <div className={styles.FotoorRowWrp}>
                        <div>
                            <Link className={styles.link} href={"/"}>Homes</Link>
                            <Link className={styles.link} href={"/"}>Apartmetns</Link>
                            <Link className={styles.link} href={"/"}>Resourts</Link>
                            <Link className={styles.link} href={"/"}>Valliege</Link>
                            <Link className={styles.link} href={"/"}>Hotels</Link>
                            <Link className={styles.link} href={"/"}>Guest House</Link>
                        </div>
                        <div>
                            <Link className={styles.link} href={"/"}>Unicqu price to stay</Link>
                            <Link className={styles.link} href={"/"}>Reviews</Link>
                            <Link className={styles.link} href={"/"}>Unpacked travel Articals</Link>
                            <Link className={styles.link} href={"/"}>Travel Communications</Link>
                            <Link className={styles.link} href={"/"}>Seasonal and holiday deals</Link>
                        </div>
                        <div>
                            <Link className={styles.link} href={"/"}>Car rental</Link>
                            <Link className={styles.link} href={"/"}>Flight Finder</Link>
                            <Link className={styles.link} href={"/"}>Resturant resservations</Link>
                            <Link className={styles.link} href={"/"}>Travel Agents</Link>
                        </div>
                        <div>
                            <Link className={styles.link} href={"/"}>Customer Servises</Link>
                            <Link className={styles.link} href={"/"}>Partner help</Link>
                            <Link className={styles.link} href={"/"}>Careers</Link>
                            <Link className={styles.link} href={"/"}>Sustaiability</Link>
                            <Link className={styles.link} href={"/"}>Press center</Link>
                            <Link className={styles.link} href={"/"}>Sefty resouse center</Link>
                            <Link className={styles.link} href={"/"}>invastor relations</Link>
                            <Link className={styles.link} href={"/"}>Trams and conditions</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

