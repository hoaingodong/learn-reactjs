
import { Box } from "@mui/material";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        height: "calc(100vh - 48px - 58px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      Board content
    </Box>
  );
}

export default BoardContent