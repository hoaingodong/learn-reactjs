import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { pink, orange, blue, green } from '@mui/material/colors';

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: pink
      },
    },
    dark: {
      palette: {
        primary: blue
      },
    },
  },
});

export default theme;
