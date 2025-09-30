import {useState} from "react"

export default function ControlledForm(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email,
            password,
        }
        onsole.log(formData);
    }
    return(
        <>
        <form onSubmit={handleSubmit} style={{ padding: "10px"}}>
            <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
            <fieldset>
                <label>E-Mail</label>
                <input type="email" name="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="E-Mail"></input>
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"></input>
            </fieldset>
        </form>
        <button>
            Login
        </button>
        </>
    )
}