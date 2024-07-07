
import { Box } from "@mui/material";

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      Board Board
    </Box>
  );
}

export default BoardBar