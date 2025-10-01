import {Link} from "react-router";

export default function ChronicleListRoute() {
    return <main>
        <h2>Liste der Chroniken</h2>
        <ul>
            <li><Link to={'/chronicles/1'}>Chronik Detail 1</Link></li>
            <li><Link to={'/chronicles/2'}>Chronik Detail 2</Link></li>
        </ul>
    </main>
}