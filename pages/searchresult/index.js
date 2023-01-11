import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Container from "../../Componnent/Container";
import Footer from "../../Componnent/Footer";
import OtherPageHeader from "../../Componnent/header/OtherPageHeader";
import HotelItem from "../../Componnent/home/HotelItem";
import { UseAllContext } from "../../context/AllContext";
import styles from "../../styles/search/searchResult.module.css";


export default function Index() {

    const { state, setState, room, child, adult, setroom, setchild, setadult, destination, setdestination, openDate, setopenDate } = UseAllContext();


    const handleClick = async (e) => {
        e.preventDefault();

        const object = {
            adult,
            child,
            room,
            destination,
            state

        }
        console.log(object);
    }





    return (
        <Container>
            <div className={styles.serchWrp}>
                <div className={styles.aside}>
                    <div className={styles.searcherWrp}>
                        <h3>Search</h3>
                        <div className={styles.inputWrper}>
                            <div>
                                <p>Destination</p>
                                <input className={styles.destinationInput} value={destination} onChange={(e) => setdestination(e.target.value)} type="text" />
                            </div>
                            <div>
                                <p>Check-in date</p>
                                <div onClick={() => setopenDate(!openDate)} className={styles.CheckingInput}>
                                    {`${format(state[0].startDate, 'mm/dd/yyyy')} To ${format(state[0].endDate, 'mm/dd/yyyy')}`}
                                </div>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setState([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state}
                                    className={styles.dateRange}
                                />}
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
                                        <input onChange={(e) => setadult(parseInt(e.target.value))} type="number" value={adult} />
                                    </div>
                                    <div>
                                        <span>Child</span>
                                        <input onChange={(e) => setchild(parseInt(e.target.value))} type="number" value={child} />
                                    </div>
                                    <div>
                                        <span>Room</span>
                                        <input onChange={(e) => setroom(parseInt(e.target.value))} type="number" value={room} />
                                    </div>

                                </div>
                            </div>
                            <div>
                                <button onClick={(e) => handleClick(e)} className={styles.btn}>Search</button>
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

