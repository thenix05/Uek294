import styles from "./Button.module.css"

export default function Button({ children, secondary, danger, onClick, ...props }) {
    const classes =
        styles.button +
        (secondary ? ` ${styles.secondary}` : "") +
        (danger ? ` ${styles.danger}` : "")

    return (
        <button className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    )
}
