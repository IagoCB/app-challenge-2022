import {
    useState, createContext,
} from 'react';

export const Context = createContext({});

function ContextProvider({ children }) {
    const [currentGifts, setCurrentGifts] = useState({});
    const [listUpdateInstallers, setListUpdateInstallers] = useState({});
    return (
        <Context.Provider
        value={{    
            currentGifts, 
            setCurrentGifts,
            listUpdateInstallers,
            setListUpdateInstallers,
        }}
        >
        {children}
        </Context.Provider>
    );
}

export default ContextProvider;