import { Switch, Route } from "react-router-dom";
import "./App.css";
import AddNotes from "./AddNotes";
import Notes from "./Notes";
import { useState } from "react";

function App() {
  const [notesList, setNotesList] = useState([]);

  const addNotesHandler = (uTitle, uDescription) => {
    setNotesList((prevLists) => {
      return [
        ...prevLists,
        {
          title: uTitle,
          description: uDescription,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const onRemoveNotesHandler = (id) => {
    setNotesList((prevLists) => {
      return prevLists.filter((note) => note.id !== id);
    });
  };

  return (
    <Switch>
      <Route path="/add-notes">
        <AddNotes onAddNotes={addNotesHandler} />
      </Route>
      <Route path="/">
        <Notes notes={notesList} onRemove={onRemoveNotesHandler} />
      </Route>
    </Switch>
  );
}

export default App;
