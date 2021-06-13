import React, { useEffect } from 'react'
import classes from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import Toggle from './ThemeToggler/Toggle'
import { StyledNavbar } from './NavStyle'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setMobileSize } from '../../../store/Slices/MobileSizeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar: React.FC = () => {
   const dispatch = useAppDispatch()
   const isMobileSize = useAppSelector((state) => state.mobileReducer.isMobileSize)

   const handleWindowSizeChange = () => {
      if (window.innerWidth < 815) dispatch(setMobileSize(true))
      else dispatch(setMobileSize(false))
   }
   useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange)
      }
   }, [handleWindowSizeChange])
   return (
      <StyledNavbar data-testid='navbar'>
         <Link to='/'>
            <h1 className={classes.Title}>React Recipe Finder</h1>
         </Link>
         {isMobileSize && <FontAwesomeIcon icon={['fas', 'bars']} size='2x' />}
         <section className={classes.NavbarList}>
            <NavLink className={classes.ListItems} to='/recipes'>
               Recipes
            </NavLink>
            <NavLink className={classes.ListItems} to='/videos'>
               Videos
            </NavLink>
            <NavLink className={classes.ListItems} to='/menu-items'>
               Menu Items
            </NavLink>
            <Toggle />
         </section>
      </StyledNavbar>
   )
}

export default Navbar
