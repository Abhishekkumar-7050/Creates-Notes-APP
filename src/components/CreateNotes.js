import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNotes } from "../redux/slices/NotesSlice";
function CreateNotes() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch(null);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createNotes({
       title, 
       desc, 
       id:nanoid(10)
      }
    ));
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Notes"
          type="text"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    
    </div>
  );
}

export default CreateNotes;
