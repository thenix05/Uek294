import { Link } from "react-router"

import styles from "./LinkButton.module.css"

export default function LinkButton({ to, secondary, children }) {
    const classes = styles.button + (secondary ? ` ${styles.secondary}` : "")

    return (
        <Link to={to} className={classes}>
            {children}
        </Link>
    )
}
