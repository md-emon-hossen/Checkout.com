import React from 'react';

export default function OptionItem({ name, value, setvalue }) {




    function handleDicrees(e, name) {
        e.preventDefault();
        if (name === "Adult") {
            setvalue((pv) => {
                return pv - 1;
            });
        } else if (name === "Child") {
            setvalue((pv) => {
                return pv - 1;
            });
        } else {
            setvalue((pv) => {
                return pv - 1;
            });
        }

    }


    function handleIncress(e, name) {
        e.preventDefault();
        if (name === "Adult") {
            setvalue((pv) => {
                return pv + 1;
            });
        } else if (name === "Child") {
            setvalue((pv) => {
                return pv + 1;
            });
        } else {
            setvalue((pv) => {
                return pv + 1;
            });
        }

    }

    return (
        <div>
            <div>{name}</div>
            <div>
                <button disabled={value === 0} onClick={(e) => handleDicrees(e, name)}>-</button>
            </div>
            <div>{value}</div>
            <div>
                <button onClick={(e) => handleIncress(e, name)}>+</button>
            </div>
        </div>
    )
}
