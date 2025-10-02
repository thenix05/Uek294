import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "@/App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.main}>
      <Outlet></Outlet>
    </main>
  );
}

export default App;
