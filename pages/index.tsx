import type { NextPage } from "next";
import styles from "../styles/Evernote.module.scss";
import NoteOperations from "../components/NoteOperations";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NoteOperations />
      </div>
      <div className={styles.right}>Right</div>
    </div>
  );
};

export default Home;
