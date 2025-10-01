import { useState } from "react";

export default function ControlledForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    console.log(formData);
    console.log(JSON.stringify(inputValues));
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
        <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
        <fieldset>
          <label htmlFor="email1">E-Mail</label>
          <input
            id="email1"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-Mail"
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="password1">Password</label>
          <input
            id="password1"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          ></input>
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
