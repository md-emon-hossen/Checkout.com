import React from 'react';

export default function OptionItem({ name, value, setvalue, option }) {



    //     function handleDicrees(e, name) {
    //         e.preventDefault();
    //         if (name === 'Adult') {
    //             setvalue((pv) => {
    //                  ...option, adult: pv - 1 
    //     })
    //     } else if (name === "child") {
    //         setvalue((pv) => {
    //          ...option, child: pv - 1 
    //             })
    // } else {

    //     setvalue((pv) => {
    //          ...option, room: pv - 1 
    //             })
    //         }
    //     }


    function handleInCress(e, name) {
        e.preventDefault();
        if (name === "Adult") {

        }

    }


    return (
        <div>
            <div>{name}</div>
            <div>
                <button onClick={(e) => handleDicrees(e, name)}>-</button>
            </div>
            <div>{value}</div>
            <div>
                <button>+</button>
            </div>
        </div>
    )
}
