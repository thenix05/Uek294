export default function MyKeyboardInput(){
    const handleKeyDown = (e) => {
        console.log("Key pressed:", e.key)

        if(e.Key === "Enter"){
            alert("You pressed Enter!")
        }
    }
    return(
        <input type="text" onKeyDown={handleKeyDown} placeholder="Press a key"></input>
    )
}