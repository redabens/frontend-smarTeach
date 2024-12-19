import React from "react";
import { TextField, IconButton, Box } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

export default function ChatInput(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextField
        fullWidth
        variant="standard-multiline-static"
        label="Poser votre Question ..."
        value={props.typingQuestion}
        onChange={(e) => props.setTypingQuestion(e.target.value)}
      />
      <IconButton
        color="primary"
        onClick={() => {
          props.setQuestion(props.typingQuestion);
          alert("Search clicked!")}}
      >
        {/* <SearchIcon /> */}
      </IconButton>
    </Box>
  );
}

