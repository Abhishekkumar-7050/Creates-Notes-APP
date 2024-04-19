import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotes } from "../redux/slices/NotesSlice";
function ListNotes() {
  const notes = useSelector((state) => state.notesReducr.notes);
  const dispatch = useDispatch(null)
  return <div>{notes.map((note) => {
                 return <>
                  <h2>{note.title}</h2>
                  <p> {note.desc}</p>
                   <p>{note.id}</p>
                   <button onClick={()=>{dispatch(deleteNotes(note.id))}}>Delete</button>
                 </>

  })}</div>;
}

export default ListNotes;
