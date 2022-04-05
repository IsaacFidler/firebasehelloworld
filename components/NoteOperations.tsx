import React from "react";
import styles from "../styles/Evernote.module.scss";
import { useState, useEffect } from "react";
import { app, database } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const dbInstance = collection(database, "notes");
type Props = {};

export default function NoteOperations({ getSingleNote }: any) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");
  const [notesArray, setNotesArray] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);
  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };

  const addDesc = (value: any) => {
    setNoteDesc(value);
  };

  const saveNote = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle,
      noteDesc: noteDesc,
    }).then(() => {
      setNoteTitle("");
      setNoteDesc("");
      getNotes();
    });
  };

  const getNotes = () => {
    getDocs(dbInstance).then((data: any) => {
      setNotesArray(
        data.docs.map((item: any) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  return (
    <>
      <div className={styles.btnContainer}>
        <button onClick={inputToggle} className={styles.button}>
          Add a New Note
        </button>
      </div>

      {isInputVisible ? (
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Enter the Title.."
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
          />
          <div className={styles.ReactQuill}>
            <ReactQuill onChange={addDesc} value={noteDesc} />
          </div>
          <button onClick={saveNote} className={styles.saveBtn}>
            Save Note
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.notesDisplay}>
        {notesArray.map((note: any) => {
          return (
            <div
              className={styles.notesInner}
              onClick={() => getSingleNote(note.id)}
              key={note.id}
            >
              <h4>{note.noteTitle}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
