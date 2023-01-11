import { createContext, useContext } from "react";

const AllContext = createContext();

export const UseAllContext = () => {
    return useContext(AllContext);
}

export function AllcontextProvider({ children, value }) {
    return (
        <AllContext.Provider value={value}>
            {children}
        </AllContext.Provider>
    )
}