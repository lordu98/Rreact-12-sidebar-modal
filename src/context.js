import React, {useState, useContext, createContext} from 'react'

export const AppContext = createContext(undefined, undefined)

export const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSideBar = () => {
        setIsSideBarOpen(true)
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider
        value={{
            isModalOpen,
            isSideBarOpen,
            openModal,
            openSideBar,
            closeModal,
            closeSideBar
        }}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default {AppContext, AppProvider};
