import classes from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import Toggle from './ThemeToggler/Toggle'

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <Link className={classes.Title} to="/"><h1>React Recipe Finder</h1></Link>
            <section className={classes.NavbarList}>
                <NavLink className={classes.ListItems} to="/recipes">Recipes</NavLink>
                <NavLink className={classes.ListItems} to="/videos">Videos</NavLink>
                <Toggle />
            </section>
        </nav>
    )
}

export default Navbar
