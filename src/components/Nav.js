import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <Link href="#" class="navbar-brand"></Link>
            <div class="nav">
                <Link to="/home" class="nav-link" style={{ color: "white" }}>Home</Link>
                <Link to="/about" class="nav-link" style={{ color: "white" }}>About</Link>
                <Link to="/education" class="nav-link" style={{ color: "white" }}>Education</Link>
                <Link to="/projects" class="nav-link" style={{ color: "white" }}>Projects</Link>
                <Link to="/contact" class="nav-link" style={{ color: "white" }}>Contact</Link>
            </div>
        </nav>

    )
}
export default Nav;