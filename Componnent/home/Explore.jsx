import img from "../../public/default-img.jpg";
import styles from "../../styles/home/Explore.module.css";


export default function Explore() {
    const style = {

        background: `linear-gradient(#00000075,#00000075),url('${img.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "Cover",
        height: "100%",
        padding: "10px 15px",
    }

    return (
        <div className={style.exploreWrp} style={style}>
            <div className={styles.titleWRp}>
                {/* <h4>Dhaka</h4>
                <p>255 Propertise</p> */}
            </div>
        </div>
    )
}
