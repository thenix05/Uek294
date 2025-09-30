import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles.css"


function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.boolean = formData.get("boolean") ? true : false;
    data.plz = formData.get("plz") === "" ? null : formData.get("plz");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit} className="example">
      <fieldset>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
      </fieldset>

      <fieldset>
        <label htmlFor="email">E-Mail</label>
        <input type="text" name="email" id="email" placeholder="E-Mail" />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </fieldset>

      <fieldset>
        <label htmlFor="boolean">
          Some boolean:
          <input type="checkbox" name="boolean" id="boolean" />
        </label>
      </fieldset>

      <fieldset>
        <label htmlFor="gender">Gender:</label>

        <label>
          Male:
          <input type="radio" name="gender" value="male" defaultChecked />
        </label>

        <label>
          Female:
          <input type="radio" name="gender" value="female" />
        </label>

        <label>
          Other:
          <input type="radio" name="gender" value="other" />
        </label>
      </fieldset>

      <fieldset>
        <label htmlFor="abc">Abc:</label>
        <select name="abc" id="abc" multiple>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="plz">PLZ:</label>
        <select name="plz" id="plz">
          <option value={""}>Bitte Plz wählen</option>
          <option value="8001">8001</option>
          <option value="8002">8002</option>
          <option value="8006">8006</option>
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="message">Nachricht:</label>
        <textarea id="message" name="message" />
      </fieldset>

      <fieldset>
        <label htmlFor="date">Datum:</label>
        <input type="date" name="date" id="data" />
      </fieldset>

      <fieldset>
        <label htmlFor="time">Zeit:</label>
        <input type="time" name="time" id="time" />
      </fieldset>

      <fieldset>
        <label htmlFor="datetime">Datum und Zeit:</label>
        <input type="datetime-local" name="datetime" id="datetime" />
      </fieldset>

      <fieldset>
        <label htmlFor="color">Color:</label>
        <input type="color" name="color" id="color" />
      </fieldset>

      <fieldset>
        <label htmlFor="number">Number:</label>
        <input type="number" name="number" id="number" />
      </fieldset>

      <fieldset>
        <label htmlFor="range">Range:</label>
        <input type="range" name="range" id="range" />
      </fieldset>

      <fieldset>
        <label htmlFor="file">File:</label>
        <input type="file" name="file" id="file" />
      </fieldset>

      <fieldset>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
}


export default App
