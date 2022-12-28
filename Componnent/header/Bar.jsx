import { format } from "date-fns";
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
    const [openDate, setopenDate] = useState(false);
    const [openOption, setopenOption] = useState(false);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setoptions] = useState({
        adult: 1,
        child: 0,
        room: 1
    });






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
                        <span onClick={() => setopenOption(!openOption)}>{`${options.adult} Adult - ${options.child} Child - ${options.room} Room`}</span>
                        {openOption && <div className={styles.optionModule}>
                            <OptionItem name="Adult" value={options.adult} setvalue={setoptions} option={options} />
                            <OptionItem name="Child" value={options.child} setvalue={setoptions} option={options} />
                            <OptionItem name="Room" value={options.room} setvalue={setoptions} option={options} />
                        </div>}
                    </div>
                </div>
                <div>
                    <button className={styles.btn}>Search</button>
                </div>
            </div>
        </Container>
    )
}
