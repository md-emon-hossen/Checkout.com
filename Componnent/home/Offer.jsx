import Image from "next/image";
import img from "../../public/default-img.jpg";
import styles from "../../styles/home/Offer.module.css";


export default function Offer() {
    return (
        <div className={styles.offerWrp}>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h1>Dublin</h1>
                        <p>1550 Propertises</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h1>Austin</h1>
                        <p>1200 Propertises</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h1>Reno</h1>
                        <p>1010 Propertises</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img} className={styles.Image} />
                <div className={styles.description}>
                    <div>
                        <h1>Singapur</h1>
                        <p>1420 Propertises</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
