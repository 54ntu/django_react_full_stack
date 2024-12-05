import React from "react";

const Notes = ({ note, onDelete }) => {
  console.log(note);
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div>
      <p className="text-2xl text-red-500">{note.titile}</p>
      <p className="text-2xl text-red-500">{note.content}</p>
      <p className="text-2xl text-red-500">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default Notes;
