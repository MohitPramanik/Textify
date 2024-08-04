import { createContext, useState } from "react";

export const textContext = createContext();

export const TextProvider = ({ children }) => {
    const [text, setText] = useState("");
    return (
        <textContext.Provider value={{ text, setText }}>
            {children}
        </textContext.Provider>
    );
};
