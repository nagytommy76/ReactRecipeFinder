import React from 'react'
import classes from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <p className={classes.FooterContnent}>&copy; Nagy Tamás. React</p>
            <section>
                <a className={classes.FontLink} target="_blank" rel="noreferrer" href="https://github.com/nagytommy76/ReactRecipeFinder">
                    <FontAwesomeIcon icon={['fab', "github"]} size="3x"/>
                </a>
                <a className={classes.FontLink} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tam%C3%A1s-nagy-27355116b/">
                    <FontAwesomeIcon icon={['fab', "linkedin"]} size="3x"/>
                </a>
                <FontAwesomeIcon className={classes.FontLink} icon={['fab', "react"]} size="3x"/>
                
            </section>
        </footer>
    )
}

export default Footer
