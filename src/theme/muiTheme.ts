import { createTheme, type Theme } from "@mui/material/styles";

const theme = (mode: "light" | "dark"): Theme =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // Light theme
                    primary: {
                        main: "#121212",
                    },
                    secondary: {
                        main: "#6b6a6a",
                    },
                    background: {
                        default: "#bdbbbb",
                    },

                    text: {
                        primary: "black",
                        secondary: "#99999A",
                    },
                    action: {
                        hover: "#FFDB70",
                    }
                }
                : {
                    // Dark theme
                    primary: {
                        main: "#1E1E1F",
                    },
                    secondary: {
                        main: "#323232",
                    },
                    background: {
                        default: "#121212",
                    },
                    text: {
                        primary: "white",
                        secondary: "#99999A",
                    },
                    action: {
                        hover: "#FFDB70",
                    }
                }),
        },


        typography: {
            fontFamily: `"Roboto", sans-serif`,
            body1: { fontFamily: `"Roboto"`, fontWeight: 400, fontSize: "1rem", lineHeight: 1.5, letterSpacing: "2px" },
            body2: { fontFamily: `"Roboto"`, fontSize: "0.85rem" },
        },

        shape: {
            borderRadius: 3,
        },
    });
export default theme;
