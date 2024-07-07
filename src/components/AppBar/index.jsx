
import { Container, Box } from "@mui/material";
import ModeToggle from "../../components/ModeSelect";


function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        width: "100%"
      }}
    >
      <ModeToggle></ModeToggle>
    </Box>
  );
}

export default AppBar