import Container from "../../Componnent/Container";
import Footer from "../../Componnent/Footer";
import OtherPageHeader from "../../Componnent/header/OtherPageHeader";
import HotelItem from "../../Componnent/home/HotelItem";
import styles from "../../styles/search/searchResult.module.css";


export default function Index() {
    return (
        <Container>
            <div className={styles.serchWrp}>
                <div className={styles.aside}>
                    <div className={styles.searcherWrp}>
                        <h3>Search</h3>
                        <div className={styles.inputWrper}>
                            <div>
                                <p>Destination</p>
                                <input className={styles.destinationInput} type="text" />
                            </div>
                            <div>
                                <p>Check-in date</p>
                                <div className={styles.CheckingInput}>

                                </div>
                            </div>
                            <div>
                                <p>Options</p>
                                <div className={styles.optionsWrp}>
                                    <div>
                                        <span>Min Price</span>
                                        <input type="number" />
                                    </div>
                                    <div>
                                        <span>Max Price </span>
                                        <input type="number" />
                                    </div>
                                    <div>
                                        <span>Adult</span>
                                        <input type="number" />
                                    </div>
                                    <div>
                                        <span>Child</span>
                                        <input type="number" />
                                    </div>
                                    <div>
                                        <span>Room</span>
                                        <input type="number" />
                                    </div>

                                </div>
                            </div>
                            <div>
                                <button className={styles.btn}>Search</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.body}>
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                    <HotelItem />
                </div>
            </div>
        </Container>
    )
}


Index.getLayout = function getLayout(page) {
    return (
        <>
            <OtherPageHeader />
            {page}
            <Footer />
        </>
    )
}

