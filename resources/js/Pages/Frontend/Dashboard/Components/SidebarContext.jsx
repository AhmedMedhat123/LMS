import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebarActive, setSidebarActive }}>
            {children}
        </SidebarContext.Provider>
    );
};
