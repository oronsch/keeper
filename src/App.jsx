import React,{useState} from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note";
import Row from "react-bootstrap/Row";
import NewNote from "./components/NewNote";

import "./styles/Notes.css";
import "./styles/App.css";

function App() {
  // State to hold the array of notes
  const [notes, setNotes] = useState([]);

  /**
   * Function to handle the deletion of a note.
   * @param {number} index - The index of the note to be deleted.
   */

  const handleDelete = (index) => {
    // Filter out the note that matches the index
    const updateNotes = notes.filter((_, noteIndex) => noteIndex !== index);
    // Update the notes state with the new array
    setNotes(updateNotes);
  };

  return (
    <>
      {/* Render the Header component */}
      <Header />

      {/* Section for adding a new note */}
      <Row className="new-note-row">
        <NewNote notes={notes} setNotes={setNotes} />
      </Row>

      {/* Section to display notes */}
      <Row>
        {/* Map through each note in the state and render a Note component */}
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            handleDelete={handleDelete}
          />
        ))}
      </Row>
      
      {/* Render the Footer component */}
      <Footer />
    </>
  );
}
export default App;


