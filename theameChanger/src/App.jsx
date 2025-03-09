import { useEffect, useLayoutEffect, useState } from "react"
import { Themeprovider } from "./Context/Theme"
import ThemeBtn from "./Components/ThemeBtn"
import Card from "./Components/Card"


function App() {
 const [themeMode, setThemeMode]=useState('light')

 const DarkTheme = () => {
      setThemeMode('dark')
 }
 const LightTheme = () => {
  setThemeMode('light')
}

const theme= 'light'

// how to change thwme 

 useEffect(()=>{
  document.querySelector('html').classList.remove('dark', 'light')
  document.querySelector('html').classList.add(themeMode)
 },[themeMode])

  return (
  <Themeprovider value={{theme, DarkTheme, LightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                      <Card />
                  </div>
              </div>
        </div>
  </Themeprovider>
  )
}

export default App
