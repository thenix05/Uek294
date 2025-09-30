import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles.css"

const handleInput = (e) => {
  const target = e.target;
  const type = target.type;
  const name = target.name;

  if (type === "checkbox") {
    return { name, type, value: target.checked };
  }

  if (type === "file") {
    return { name, type, value: target.files && target.files[0] };
  }

  if (type === "number" || type === "range") {
    return { name, type, value: parseInt(target.value) };
  }

  if (type === "select-multiple") {
    return {
      name,
      type,
      value: Array.from(target.options)
        .filter((opt) => opt.selected)
        .map((opt) => opt.value),
    };
  }

  return { name, type, value: target.value };
};

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [gender, setGender] = useState("male");
  const [abc, setAbc] = useState([]);
  const [plz, setPlz] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [datetime, setDatetime] = useState("");
  const [color, setColor] = useState("#000000");
  const [number, setNumber] = useState(0);
  const [range, setRange] = useState(50);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      boolean,
      gender,
      abc,
      plz,
      message,
      date,
      time,
      datetime,
      color,
      number,
      range,
      file,
    };
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = handleInput(e);
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "boolean":
        setBoolean(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "abc":
        setAbc(value);
        break;
      case "plz":
        setPlz(value);
        break;
      case "message":
        setMessage(value);
        break;
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "datetime":
        setDatetime(value);
        break;
      case "color":
        setColor(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "range":
        setRange(value);
        break;
      case "file":
        setFile(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="example">
      <pre>
        {JSON.stringify(
          {
            email,
            password,
            boolean,
            gender,
            abc,
            plz,
            message,
            date,
            time,
            datetime,
            color,
            number,
            range,
            file: file ? file.name : null,
          },
          null,
          4
        )}
      </pre>
      <fieldset>
        <label htmlFor="email">E-Mail</label>
        <input
          type="text"
          name="email"
          placeholder="E-Mail"
          onChange={handleChange}
          value={email}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="boolean">
          Some boolean:
          <input
            type="checkbox"
            name="boolean"
            onChange={handleChange}
            checked={boolean}
          />
        </label>
      </fieldset>

      <fieldset>
        <label htmlFor="gender">Gender:</label>

        <label>
          Male:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleChange}
          />
        </label>

        <label>
          Female:
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleChange}
          />
        </label>

        <label>
          Other:
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset>
        <label htmlFor="abc">Abc:</label>
        <select name="abc" onChange={handleChange} multiple value={abc}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="plz">PLZ:</label>
        <select name="plz" onChange={handleChange} value={plz}>
          <option value="8001">8001</option>
          <option value="8002">8002</option>
          <option value="8006">8006</option>
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="message">Nachricht:</label>
        <textarea name="message" onChange={handleChange} value={message} />
      </fieldset>

      <fieldset>
        <label htmlFor="date">Datum:</label>
        <input type="date" name="date" onChange={handleChange} value={date} />
      </fieldset>

      <fieldset>
        <label htmlFor="time">Zeit:</label>
        <input type="time" name="time" onChange={handleChange} value={time} />
      </fieldset>

      <fieldset>
        <label htmlFor="datetime">Datum und Zeit:</label>
        <input
          type="datetime-local"
          name="datetime"
          onChange={handleChange}
          value={datetime}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="color">Color:</label>
        <input
          type="color"
          name="color"
          onChange={handleChange}
          value={color}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          name="number"
          onChange={handleChange}
          value={number}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="range">Range:</label>
        <input
          type="range"
          name="range"
          onChange={handleChange}
          value={range}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="file">File:</label>
        <input type="file" name="file" onChange={handleChange} />
      </fieldset>

      <fieldset>
        <input type="submit" value="Senden" />
      </fieldset>
    </form>
  );
}
