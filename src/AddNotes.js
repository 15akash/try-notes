import React, { Fragment, useRef } from "react";
import Header from "./Header";

function AddNotes(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    props.onAddNotes(enteredTitle, enteredDescription);
    titleInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  };

  return (
    <Fragment>
      <Header />
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col px-20 py-3 bg-gray-200 mx-60 my-10 shadow-2xl"
      >
        <label className="py-3 text-lg font-bold">Title</label>
        <input
          className="h-10 px-5"
          placeholder="Enter Title"
          ref={titleInputRef}
        />
        <label className="py-3 text-lg font-bold">Notes description</label>
        <input
          className="h-40 px-5 text-lg"
          placeholder="Enter Notes description"
          ref={descriptionInputRef}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gray-800 my-10 hover:bg-gray-700 text-indigo-50 text-2xl text-center w-40 py-2"
          >
            Add Notes
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default AddNotes;
