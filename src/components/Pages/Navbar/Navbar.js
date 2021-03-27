import classes from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <Link className={classes.Title} to="/"><h1>React Recipe Finder</h1></Link>
            <section className={classes.NavbarList}>
                <NavLink className={classes.ListItems} to="/">Main Page</NavLink>
                <NavLink className={classes.ListItems} to="/recipes">Search Recipes</NavLink>
            </section>
        </nav>
    )
}

export default Navbar
