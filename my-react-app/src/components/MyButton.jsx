export default function MyButton(){

    const handleClick = (e) => {
        alert("Button clicked!");
    }
    return(
        <button onClick={handleClick}></button>
    )
}