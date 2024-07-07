import React from "react"
import { Container, Box } from "@mui/material";
import AppBar from "../../components/AppBar"
import BoardBar from "./BoardBar" 
import BoardContent from "./BoardContent"

function Board() {
  return (
    <Container
    disableGutters
    maxWidth={false}
    sx={{ height: "100vh", backgroundColor: "red" }}
  >
    <AppBar/>
    <BoardBar/>
    <BoardContent/>
  </Container>
  );
}

export default Board