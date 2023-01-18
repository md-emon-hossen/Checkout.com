import Image from "next/image";
import img from "../../public/default-img.jpg";
import styles from "../../styles/home/Explore.module.css";


export default function Explore() {
    return (
        <div className={styles.offerWrp}>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h2>Hotels</h2>
                        <p>1550 Hotels</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h2>Apartments</h2>
                        <p>1550 Apartments</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h2>Resorts</h2>
                        <p>1550 Resorts</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h2>Cabins</h2>
                        <p>1200 Cabins</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h2>Valliege</h2>
                        <p>1010 Valliege</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h2>Guest House</h2>
                        <p>1420 Guest House </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
