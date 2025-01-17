// src/ThemeContext.js
import React, { createContext, useState } from 'react';

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Cria o contexto com um valor padrão
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};