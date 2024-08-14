import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
    currentTheme: "light",
    theme: {
        light: {
            backgroundColor: "bg-white",
            textColor: "text-dark",
            buttonColor: "primary"
        },
        dark: {
            backgroundColor: "bg-dark",
            textColor: "text-white",
            buttonColor: "secondary"
        }
    },
    setCurrentTheme: () => { }
})

export function ThemeProvider(props) {
    const { children } = props;
    const [currentTheme, setCurrentTheme] = useState("light")

    useEffect(() => {
        const localTheme = localStorage.getItem("theme")
        // console.log(localTheme, 'localTheme===>>')
        if (localTheme) {
            setCurrentTheme(localTheme)
            // console.log(currentTheme, '1 currentTheme, after local storege===>>')
        } else if (localTheme === "dark" || localTheme === "light") {
            setCurrentTheme(localTheme)
            // console.log(currentTheme, '2 currentTheme, after local storege===>>')
        }
    }, [])

    const changeTheme = () => {

        setCurrentTheme((currentTheme) => {
            const newTheme = currentTheme === "light" ? "dark" : "light"
            localStorage.setItem("theme", newTheme)
            return newTheme
        })
    }

    return (
        <ThemeContext.Provider value={{
            currentTheme: currentTheme,
            theme: {
                light: {
                    backgroundColor: "bg-white",
                    textColor: "text-dark",
                    buttonColor: "primary",
                    buttonTextColor: "text-white"
                },
                dark: {
                    backgroundColor: "bg-dark",
                    textColor: "text-white",
                    buttonColor: "secondary",
                    buttonTextColor: "text-dark",
                    textColorChat: "text-dark",
                }
            },
            changeTheme: changeTheme
        }} >
            {children}
        </ThemeContext.Provider >
    )
}