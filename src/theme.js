import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      grey: {
        100: "#e0dcd5",
        200: "#c1b9aa",
        300: "#a19680",
        400: "#827355",
        500: "#63502b",
        600: "#4f4022",
        700: "#3b301a",
        800: "#282011",
        900: "#141009"
    },
      primary: {
        100: "#110f0a",
        200: "#221d14",
        300: "#332c1d",
        400: "#443a27",
        500: "#554931",
        600: "#776d5a",
        700: "#999283",
        800: "#bbb6ad",
        900: "#dddbd6",
    },
      greenAccent: {
        100: "#fdf8f1",
        200: "#fcf1e3",
        300: "#faead5",
        400: "#f9e3c7",
        500: "#f7dcb9",
        600: "#c6b094",
        700: "#94846f",
        800: "#63584a",
        900: "#312c25"
    },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f"
    },
      blueAccent: {
        100: "#fefef8",
        200: "#fdfdf0",
        300: "#fdfce9",
        400: "#fcfbe1",
        500: "#fbfada",
        600: "#c9c8ae",
        700: "#979683",
        800: "#646457",
        900: "#32322c"
    },
    }
  : {
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      primary: {
        100: "#110f0a",
        200: "#221d14",
        300: "#332c1d",
        400: "#443a27",
        500: "#554931",
        600: "#776d5a",
        700: "#999283",
        800: "#bbb6ad",
        900: "#dddbd6",
    },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#12372A",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#00d9a7",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
      },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            
            
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

