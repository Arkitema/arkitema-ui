import { createTheme } from "@mui/material/styles";
import "../../fonts.css";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1872,
    },
  },
  palette: {
    common: {
      black: "#333333",
      white: "#F7F7F6",
    },
    primary: {
      main: "#97A6B4",
      dark: "#627688",
    },
    grey: {
      50: "#F7F7F6",
      100: "#BDBDBD",
      200: "#707070",
    },
    error: {
      main: "#E06763",
    },
    warning: {
      main: "#FEA763",
    },
    success: {
      main: "#6C8E85",
    },
    background: {
      default: "#F7F7F6",
      paper: "#FFFFFF",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Matter", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: 500,
      fontSize: "38px",
    },
    h2: {
      fontWeight: "medium",
      fontSize: "31px",
    },
    h3: {
      fontWeight: "medium",
      fontSize: "19px",
    },
    h4: {
      fontWeight: 300,
      fontSize: "16px",
    },
    h5: {
      fontWeight: 300,
      fontSize: "14px",
    },
    h6: {
      fontWeight: 300,
      fontSize: "12px",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minSize: 0,
        },
      },
    },
  },
});
