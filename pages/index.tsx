import type { NextPage } from "next";
import styles from "../styles/Evernote.module.scss";
import NoteOperations from "../components/NoteOperations";
import NoteDetails from "../components/NoteDetails";
import { useState } from "react";

const Home: NextPage = () => {
  const [ID, setID] = useState(null);

  const getSingleNote = (id: any) => {
    setID(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NoteOperations getSingleNote={getSingleNote} />
      </div>
      <div className={styles.right}>
        <NoteDetails ID={ID} />
      </div>
    </div>
  );
};

export default Home;
