import React, { useEffect, useState } from "react";
import { app, database } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {};

export default function NoteDetails({ ID }: any) {
  const [singleNote, setSingleNote] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");

  const getSingleNote = async () => {
    if (ID) {
      const singleNote = doc(database, "notes", ID);
      const data = await getDoc(singleNote);
      setSingleNote({ ...data.data(), id: data.id });
    }
  };

  useEffect(() => {
    getSingleNote();
  }, [ID]);

  return (
    <>
      <h2>{singleNote.noteTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: singleNote.noteDesc }}></div>
    </>
  );
}
