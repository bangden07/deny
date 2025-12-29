import { ThemeProvider, DefaultTheme } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import Loading from "./components/Loading";
import { createContext, useState } from "react";

type ThemeContextType = {
    setTheme: (theme: DefaultTheme) => void;
};

export const ThemeSetContext = createContext<ThemeContextType>({
    setTheme: () => { },
});

function App() {
    const { theme, themeLoaded, setMode } = useTheme();
    const [isLoading, setIsLoading] = useState(true);

    if (!themeLoaded) return null;

    if (isLoading) {
        return <Loading onComplete={() => setIsLoading(false)} />;
    }

    return (
        <ThemeProvider theme={theme}>
            <ThemeSetContext.Provider value={{ setTheme: setMode }}>
                <GlobalStyle />
                <Terminal />
            </ThemeSetContext.Provider>
        </ThemeProvider>
    );
}

export default App;
