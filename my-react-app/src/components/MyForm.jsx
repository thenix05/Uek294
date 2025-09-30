
export default function MyForm(){
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="nameInput"></input>
            </label>
            <label>
                Email:
                <input type="email" name="emailInput"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}