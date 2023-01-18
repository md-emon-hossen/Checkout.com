import Image from "next/image";
import { ImCross } from "react-icons/im";
import { UseAllContext } from "../../context/AllContext";
import img from "../../public/default-img.jpg";
import styles from "../../styles/home/Bigphoto.module.css";
import Arrow from "../Arrow";

export default function BigPhoto() {

    const { setopenBigPhoto } = UseAllContext();


    return (
        <div className={styles.BigphotoWrp}>
            <div>
                <Image className={styles.image} src={img} alt="image" />
                <div onClick={() => setopenBigPhoto(false)} className={styles.crossbtn}><ImCross /></div>
                <Arrow />
            </div>
        </div>
    )
}
