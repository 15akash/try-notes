import React from "react";
import Card from "./Card";

function NoteItem(props) {
  return (
    <Card>
      <li className="flex flex-col">
        <div className="grid grid-cols-2 pt-1 pb-3 text-lg">
          <div>
            <span className="font-bold">Title : </span>
            {props.title}
          </div>
          <div className="flex justify-end">
            <button
              className="hover:bg-gray-600 bg-gray-800 text-lg text-yellow-50 px-3 py-1"
              onClick={props.remove}
            >
              Delete note
            </button>
          </div>
        </div>
        <div>
          <span className="font-bold">Description : </span>
          {props.description}
        </div>
      </li>
    </Card>
  );
}

export default NoteItem;
