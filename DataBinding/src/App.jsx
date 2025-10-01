import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles.css";
import ControlledForm from "./components/ControlledForm";
import UnControlledForm from "./components/UnControlledForm";

export default function App() {
  return (
    <div>
      <ControlledForm></ControlledForm>
      <UnControlledForm></UnControlledForm>
    </div>
  );
}
