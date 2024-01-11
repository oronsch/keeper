import React, { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import "..//styles/NewNote.css"

/**
 * NewNote component allows users to create new notes.
 * @param {Object} props - Contains notes array and setNotes function.
 */

function NewNote({ notes, setNotes }) {
  // State to control the expansion of the input field
  const [expendInput, setExpendInput] = useState(false);
  // State to manage the input values for the new note
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  /**
   * Handles the input changes and updates the state.
   * @param {Object} e - Event object.
   */
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  /**
   * Handles the submission of the new note form.
   * Prevents default form action, checks input validity,
   * updates notes state and resets input fields.
   * @param {Object} e - Event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title && input.content) {
      setNotes([...notes, input]);
      setInput({
        title: "",
        content: "",
      });
    }
  };

  // Expands the input field when the textarea is clicked
  const handleExpendInput = () => {
    setExpendInput(true);
  };

  return (
    <div className="form-container">
      <>
        <form onSubmit={handleSubmit}>
          {/* Conditionally render the title input field based on expendInput state */}
          {expendInput && (
            <>
              <input
                onChange={handleInput}
                className="note-input"
                type="text"
                name="title"
                value={input.title}
                placeholder="Enter Note title"
              />
              <button type="submit">
                <NoteAddIcon />
              </button>
            </>
          )}
          <textarea
            onClick={handleExpendInput}
            onChange={handleInput}
            className="note-input"
            type="text"
            name="content"
            value={input.content}
            placeholder="Enter Your New Note"
            rows={expendInput ? 4 : 1}
          />
        </form>
      </>
    </div>
  );
};
export default NewNote;
