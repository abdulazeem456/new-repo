import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    theme: 'light',
    DarkTheme: () => {  },
    LightTheme: () =>{  }
})

export const Themeprovider= ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}