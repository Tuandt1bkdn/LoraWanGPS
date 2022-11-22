import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { db } from "~/firebase";
import { uid } from "uid";
import { useState, useEffect } from "react";
import { set, ref, onValue } from "firebase/database";
//import { snapshotEqual } from "firebase/firestore";
//import { computeHeadingLevel } from "@testing-library/react";

const cx = classNames.bind(styles);

function Home() {
  //write
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const handleToChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setNames([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((name) => {
          setNames((oldArray) => [...oldArray, name]);
        });
      }
    });
  }, []);

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      name,
      uuid,
    });
    setName("");
  };

  return (
    <div className="test">
      <input type="text" value={name} onChange={handleToChange} />
      <button onClick={writeToDatabase}>Luu</button>
      {names.map((name) => (
        <div className={cx("test1")}>
          <h1>{name.name}</h1>
        </div>
      ))}
      <button>update</button>
    </div>
  );
}
export default Home;
