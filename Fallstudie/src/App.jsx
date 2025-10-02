import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "@/App.module.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
