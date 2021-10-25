import React, { Fragment } from "react";
import Header from "./Header";
import NoteItem from "./NoteItem";

function Notes(props) {
  return (
    <Fragment>
      <Header />
      <div className="flex flex-col ">
        <ul>
          <NoteItem
            key={1}
            title="Just a sample title"
            description="This is just a sample notes description. To add notes, click on the 'Add Notes' option from the menu above."
          />
        </ul>
        <ul>
          {props.notes.map((note) => (
            <NoteItem
              key={note.id}
              title={note.title}
              description={note.description}
              remove={() => {
                props.onRemove(note.id);
              }}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Notes;
