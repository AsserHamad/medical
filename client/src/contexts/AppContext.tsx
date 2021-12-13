import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    language: 'ar',
    setLanguage: (_ : 'en'|'ar') => {},
    flipLanguage: () => {}
});

export const AppContextProvider = ({children} : {children: any}) => {
    const [language, setLanguage] = useState<'en'|'ar'>('ar');
    const flipLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar');

    return (
        <AppContext.Provider value={{
            language,
            setLanguage,
            flipLanguage
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);