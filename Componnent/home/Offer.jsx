import img from "../../public/default-img.jpg";
import styles from "../../styles/home/Offer.module.css";

export default function Offer() {

    const style = {

        background: `linear-gradient(#00000075,#00000075),url('${img.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "Cover",
        height: "100%",
        padding: "10px 15px",
        width: "100%",
        marginRight: "20px",
    }



    return (
        <div style={style}>
            <h4 className={styles.head}>Save 15% with Late Escape Deals</h4>
            <p className={styles.dis}>Enjoy the freedom of a monthly stay on Booking.com</p>
            <button className={styles.btn}>Explore Deal</button>
        </div>
    )
}
