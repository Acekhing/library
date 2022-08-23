import {
  Box,
  Button,
  Link,
  Modal,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Books from "../../components/Books";
import useFetch from "../../hooks/useFetch";
import theme from "../../theme/LigthTheme";
import { REQUEST_FIELD } from "../../utilities/Constants";
import "./Home.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  // States
  /* A custom hook that is used to fetch data from the API. */
  const { data, loading, error, refetch } = useFetch(
    "https://localhost:7240/api/Books",
    "GET"
  );
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setCategory("");
    setDescription("");
    setId("");
  };

  const handleOpen = (book) => {
    setOpen(true);
    setTitle(book.title);
    setCategory(book.category);
    setDescription(book.description);
    setId(book.id);
  };

  // Actions
  const deleteBook = (id) => {
    fetch(`https://localhost:7240/api/Books/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        handleClose();
        refetch();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateBook = () => {
    if (title === "" || category === "" || description === "") {
      alert("Please fill all fields");
      return;
    }

    const book = { ...REQUEST_FIELD, title, category, description };

    fetch(`https://localhost:7240/api/Books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((response) => {
        console.log(response);
        handleClose();
        refetch();
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
            <div className="Section-One">
              {loading && <h2>loading...</h2>}
              <h2>New & Trending</h2>
              <p>Explore new world from authors</p>
              <input
                type="text"
                placeholder="Search title or category..."
              ></input>
            </div>
            <div className="Section-Two">
              <Link href="upload">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 4 }}
                >
                  Add New Book
                </Button>
              </Link>
            </div>
          </div>
          <div className="Books">
            {data && (
              <Books
                books={data}
                onDelete={deleteBook}
                openModal={handleOpen}
              />
            )}
          </div>
        </div>
        <div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <h2>Update Book</h2>
              <TextField
                id="modal-modal-title"
                fullWidth
                value={title}
                variant="outlined"
                margin="dense"
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="modal-modal-catgeory"
                fullWidth
                value={category}
                variant="outlined"
                margin="dense"
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                id="modal-modal-description"
                fullWidth
                value={description}
                variant="outlined"
                margin="dense"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                onClick={() => updateBook()}
                variant="contained"
                color="primary"
                style={{ marginTop: 10, display: "block" }}
              >
                Update
              </Button>
            </Box>
          </Modal>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Home;
