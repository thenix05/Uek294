import styles from "../components/TextField.module.css"
export default function TextField({textOnChange, textValue}){
    
    return(
        <input type="text" onChange={textOnChange} value={textValue} className={styles.TextField} >
        </input>
    )
}