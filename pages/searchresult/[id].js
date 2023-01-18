import Image from "next/image";
import Container from "../../Componnent/Container";
import Footer from "../../Componnent/Footer";
import OtherPageHeader from "../../Componnent/header/OtherPageHeader";
import { UseAllContext } from "../../context/AllContext";
import img from "../../public/default-img.jpg";
import styles from "../../styles/search/SingleSearchResult.module.css";

export default function SingleHotel() {

    const { setopenBigPhoto } = UseAllContext();

    return (
        <Container>
            <div className={styles.singleSearchWrp}>
                <div className={styles.singleHeaderWrp}>
                    <div className={styles.header}>
                        <h2>Grand Plance Hotel</h2>
                        <p> Rongpur central city</p>
                        <p className={styles.spanone}>Excellent Location 500m from center</p>
                        <p className={styles.spanTwo}>Book and Stay over $140 at this property and get a free airport taxi</p>
                    </div>
                    <div>
                        <button className={styles.btn}>Book Now</button>
                    </div>
                </div>
                <div className={styles.gallary}>
                    <div onClick={() => { setopenBigPhoto(true) }}>
                        <Image className={styles.image} src={img} alt="Image" />
                    </div>
                    <div onClick={() => { setopenBigPhoto(true) }}>
                        <Image className={styles.image} src={img} alt="Image" />
                    </div>
                    <div onClick={() => { setopenBigPhoto(true) }}>
                        <Image className={styles.image} src={img} alt="Image" />
                    </div>
                    <div onClick={() => { setopenBigPhoto(true) }}>
                        <Image className={styles.image} src={img} alt="Image" />
                    </div>
                    <div onClick={() => { setopenBigPhoto(true) }}>
                        <Image className={styles.image} src={img} alt="Image" />
                    </div>
                    <div onClick={() => { setopenBigPhoto(true) }}>
                        <Image className={styles.image} src={img} alt="Image" />
                    </div>
                </div>
                <div className={styles.discriptions}>
                    <div className={styles.header}>
                        <h2>Stay in the heart of city</h2>
                        <p>Reshma is a garment worker in Dhaka. She&apos;s 18 years old. Her family came to Dhaka from a village eight years ago. There was river erosion in her village. They last their home. So the family came to Dhaka. Reshma&apos;s father worked as a rickshaw driver, but he died in an accident. Reshma&apos;s uncle Ratan helped the family. He found a small house for them at Kalyanpur. He took Reshma to a garment factory in Mirpur. She works there now. He younger brother Babul goes to school. He&apos;s in class 5. Her mother stiches nakshi kathas</p>
                    </div>
                    <div className={styles.price}>
                        <div>
                            <h3>Perfect for a 9-Night Stay!</h3>
                            <p>Reshma is a garment worker in Dhaka. She&apos;s 18 years old. Her family came to Dhaka from a village eight years ago.</p>
                            <h2>$940 (9 night)</h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

SingleHotel.getLayout = function getLayout(page) {
    return (
        <>
            <OtherPageHeader />
            {page}
            <Footer />
        </>
    )
}
