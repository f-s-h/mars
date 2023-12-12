import { createTheme } from '@mui/material';
import { blueGrey, green, grey, lightBlue, red } from '@mui/material/colors';
/**
      primary: {
        main: "#001529",
        light: "#1c3147",
        dark: "#051321",
        contrastText: "#A6ADB4",
      }
      secondary: {
        main: "#efefef",
        light: "#343434"
      }
 */
export const theme = createTheme({
  palette: {
    primary: {
      main: "#001529",
      light: "#1c3147",
      dark: "#051321",
      contrastText: "#9a9a9a",
    },
    secondary: {
      main: "#efefef",
      light: "#343434"
    }
  },
})