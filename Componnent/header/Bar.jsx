import { format } from "date-fns";
import { useRouter } from "next/router";
import { useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { BsPeopleFill } from "react-icons/bs";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import styles from "../../styles/Header/Bar.module.css";
import Container from "../Container";
import OptionItem from "../OptionItem";

export default function Bar() {
    const router = useRouter();
    const [openDate, setopenDate] = useState(false);
    const [openOption, setopenOption] = useState(false);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [adult, setadult] = useState(1);
    const [child, setchild] = useState(0);
    const [room, setroom] = useState(1);

    //object
    const valueObject = {
        adult,
        child,
        room
    }



    function handleClick(e) {
        e.preventDefault();

        router.push("/searchresult");
    }




    return (
        <Container>
            <div className={styles.BarWrper}>
                <div className={styles.distinations}>
                    <FaBed className={styles.icons} />
                    <input className={styles.input} type="text" placeholder="Where are you going?" />
                </div>
                <div>
                    <FaCalendarAlt className={styles.icons} />
                    <div className={styles.CkeckInOut} onClick={() => setopenDate(!openDate)}>
                        <span>{`${format(state[0].startDate, 'mm/dd/yyyy')} to ${format(state[0].endDate, 'mm/dd/yyyy')}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                            className={styles.dateRange}
                        />}
                    </div>
                </div>
                <div>
                    <BsPeopleFill className={styles.icons} />
                    <div className={styles.bokkingInfo}>
                        <span onClick={() => setopenOption(!openOption)}>{`${adult} Adult - ${child} Child - ${room} Room`}</span>
                        {openOption && <div className={styles.optionModule}>
                            <OptionItem name="Adult" value={adult} setvalue={setadult} />
                            <OptionItem name="Child" value={child} setvalue={setchild} />
                            <OptionItem name="Room" value={room} setvalue={setroom} />
                        </div>}
                    </div>
                </div>
                <div>
                    <button onClick={(e) => handleClick(e)} className={styles.btn}>Search</button>
                </div>
            </div>
        </Container>
    )
}
