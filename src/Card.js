import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col px-10 py-3 bg-gray-200 mx-40 mt-10 shadow-xl">
      {props.children}
    </div>
  );
}

export default Card;
