import Link from "next/link";
import img from "../../public/default-img.jpg";
import styles from "../../styles/home/HotelItem.module.css";
export default function HotelItem() {

    const style = {
        background: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no - repeat",
        backgroundPosition: "center"
    }

    return (
        <Link href={"/1"} className={styles.hotelWrp}>
            <div style={style}></div>
            <div className={styles.discription}>
                <h3>Grand Plance Hotel</h3>
                <p>fdgfdgfdfg</p>
                <div>Free Airport Taxi</div>
                <b>gsdgfdsf</b>
                <p>fdgfdgfdfg</p>
                <p>fdgfdgfdfg</p>
                <p>fdgfdgfdfg</p>
            </div>
            <div className={styles.price}>
                <div></div>
                <div></div>
                <div className={styles.btn}>See Availability</div>
            </div>
        </Link >
    )
}
