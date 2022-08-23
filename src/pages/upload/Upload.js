import React, { useState } from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import theme from "../../theme/LigthTheme";
import { REQUEST_FIELD } from "../../utilities/Constants";

const Upload = () => {
  // States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const uploadBook = () => {
    if (title === "" || category === "" || description === "") {
      alert("Please fill all fields");
      return;
    }

    const book = { ...REQUEST_FIELD, title, category, description }; // Destructure request field

    fetch("https://localhost:7240/api/Books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((response) => {
        console.log(response);
        setTitle("");
        setCategory("");
        setDescription("");
        alert("Book added");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="Wrapper">
          <div className="TopSection">
            <div>
              <h2>Enter details</h2>
              <TextField
                fullWidth
                margin="dense"
                label="Title"
                variant="outlined"
                color="primary"
                required
                type={"text"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Category"
                variant="outlined"
                color="primary"
                required
                type={"text"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Short description"
                variant="outlined"
                color="primary"
                required
                type={"text"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                onClick={() => uploadBook()}
                variant="contained"
                color="primary"
                style={{ marginTop: 10 }}
              >
                Upload
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Upload;
