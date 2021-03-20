import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <Link className={classes.Title} to="/"><h1>React Recipe Finder</h1></Link>
            <ul className={classes.NavbarList}>
                <Link className={classes.ListItems} to="/"><li>Main Page</li></Link>
                <Link className={classes.ListItems} to="/recipes"><li>Search Recipes</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
