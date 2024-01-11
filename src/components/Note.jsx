import React from "react";
import Card from 'react-bootstrap/Card';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../styles/Notes.css";

/**
 * Note component represents a single note.
 * @param {Object} props - Contains note data and the handleDelete function.
 */
function Note({ title,content, index, handleDelete }) {
  return (
    // Using Card from react-bootstrap to style the note
    <Card className="card-note" style={{ width: "18rem" }}>
      <Card.Body>
        {/* Displaying the title of the note */}
        <Card.Title>{title}</Card.Title>

        {/* Displaying the content of the note */}
        <Card.Text>{content}</Card.Text>

        {/* Delete button for the note */}
        <button onClick={() => handleDelete(index)} className="btn-notes">
          {/* MaterialUI delete icon */}
          <DeleteForeverIcon />
        </button>
      </Card.Body>
    </Card>
  );
};

export default Note;
