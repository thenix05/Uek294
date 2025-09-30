import styles from "./MyHoverableDiv.module.css";

export default function MyHoverableDiv(){
    const handleMouseEnter = (e) => {
        console.log("Mouse entered the div!");
    }
    const handleMouseLeave = (e) => {
        console.log("Mouse left the div!")
    }
    return(
        <div className={styles.div} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            Hover me!
        </div>
    )
}