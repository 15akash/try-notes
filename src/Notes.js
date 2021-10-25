import React, { Fragment } from "react";
import Header from "./Header";
import NoteItem from "./NoteItem";
import Card from "./Card";

function Notes(props) {
  return (
    <Fragment>
      <Header />
      <div className="flex flex-col ">
        <ul>
          <Card>
            <li className="flex flex-col">
              <div className="my-2 text-lg">
                <span className="font-bold">Title : </span>
                Just a sample title
              </div>

              <div className="my-1">
                <span className="font-bold">Description : </span>
                This is just a sample description. Please click on add button
                from the 'navigation bar' to add notes below.
              </div>
            </li>
          </Card>
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
