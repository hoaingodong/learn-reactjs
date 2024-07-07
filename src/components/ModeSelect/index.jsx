import Button from "@mui/material/Button";
import {
  useColorScheme,
} from '@mui/material/styles';

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

export default ModeSelect