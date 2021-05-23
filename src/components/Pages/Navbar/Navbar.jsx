import React from 'react'
import classes from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import Toggle from './ThemeToggler/Toggle'

const Navbar = () => {
    return (
        <nav data-testid="navbar" className={classes.Navbar}>
            <Link to="/"><h1 className={classes.Title}>React Recipe Finder</h1></Link>
            <section className={classes.NavbarList}>
                <NavLink className={classes.ListItems} to="/recipes">Recipes</NavLink>
                <NavLink className={classes.ListItems} to="/videos">Videos</NavLink>
                <NavLink className={classes.ListItems} to="/menu-items">Menu Items</NavLink>
                <Toggle />
            </section>
        </nav>
    )
}

export default Navbar
