import Image from "next/image";
import { useRouter } from "next/router";
import img from "../../public/default-img.jpg";
import styles from "../../styles/home/HotelItem.module.css";

export default function HotelItem() {

    const router = useRouter();

    function handleClick(e) {
        e.preventDefault();


        router.push("/searchresult/1");


    }






    return (
        <div className={styles.hotelWrp}>
            <div className={styles.image}>
                <Image src={img} className={styles.image} />
            </div>
            <div className={styles.discription}>
                <h3>Grand Plance Hotel</h3>
                <p>500m from center</p>
                <div>Free Airport Taxi</div>
                <b>Studio Apartment with Air Condition</b>
                <p>Entire Studio 1 bathroom,1 bedroom</p>
                <p>Free Cencleation</p>
                <p>You can cencle later.so lock this price today.</p>
            </div>
            <div className={styles.price}>
                <div className={styles.rattingWrp}>
                    <div>Excellent</div>
                    <div>
                        <div className={styles.rating}>8.1</div>
                    </div>

                </div>
                <div className={styles.prigingWrp}>
                    <h2>$105</h2>
                    <p>include taxs and fees</p>
                </div>
                <div onClick={(e) => handleClick(e)} className={styles.btn}>See Availability</div>
            </div>
        </div >
    )
}
