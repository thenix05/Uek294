import styles from "../components/TextField.module.css"
export default function TextField({textOnChange, textValue}){
    
    return(
        <div>
            <h2>
                Enter a text: 
            </h2>
            <input type="text" onChange={textOnChange} value={textValue} className={styles.TextField} >
        </input>
        </div>
    )
}