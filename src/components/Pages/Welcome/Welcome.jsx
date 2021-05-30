import React, {lazy} from 'react'
import classes from './Welcome.module.css'

const Header = lazy(() => import('./Header/Header'))
const About = lazy(() => import('./About/About'))

const Welcome = () => {
    return (
        <section className={classes.Contanier}>
            <Header/> 
            <About />     
        </section>
    )
}

export default Welcome
