import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import Notes from "../components/Notes";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const getNote = async () => {
    const response = await api.get("/api/v1/notes/");
    // console.log(response.data);
    setNotes(response.data);
    console.log("updated notes :", response.data);
  };

  const deleteNotes = async (pk) => {
    const response = await api.delete(`/api/v1/notes/delete/${pk}/`);
    if (response.status === 204) {
      console.log("data deleted successfully...!");
      alert("deleted successfully..!!");
    } else {
      alert("error deleting notes.");
    }
    getNote();
  };

  const createNote = async (e) => {
    e.preventDefault();
    const response = await api.post("/api/v1/notes/", { content, title });
    // console.log(`response while creating notes ${response }`);
    console.log(response);
    if (response.status === 201) {
      alert("notes created successfully..!!");
    } else {
      alert("error creating notes..!!");
    }

    getNote();
  };

  useEffect(() => {
    getNote();
  }, []);

  return (
    <div className="flex flex-col bg-slate-200 items-center  text-center p-3 h-full space-y-2 text-xl">
      {" "}
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Notes note={note} onDelete={deleteNotes} key={note.id} />
        ))}
      </div>
      <div className="flex flex-col p-2 space-y-3">
        <h2>create a note</h2>
        <form
          className="flex flex-col md:flex-col space-y-3"
          onSubmit={createNote}
        >
          <input
            className="p-2 font-semibold text-slate-950 rounded-md"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="enter the title of the notes"
          />
          <input
            className="p-2 font-semibold text-slate-950 rounded-md"
            type="text"
            name="content"
            onChange={(e) => setContent(e.target.value)}
            placeholder="enter your content "
          />
          <button className="bg-green-500 p-2 font-semibold text-2xl rounded-md">
            create note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
