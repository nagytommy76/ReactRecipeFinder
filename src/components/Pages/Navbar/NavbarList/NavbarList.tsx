import React from 'react'
import { NavbarListStyle, StyledLi } from './ListStyle'
import Toggle from '../ThemeToggler/Toggle'
import { CSSTransition } from 'react-transition-group'
import classes from './List.module.css'
import { useAppSelector } from '../../../../app/hooks'

const NavbarList: React.FC<{ navbarOpen?: boolean }> = ({ navbarOpen }) => {
   const nodeRef = React.useRef(null)
   const isMobile = useAppSelector((state) => state.mobileReducer.isMobileSize)
   return (
      <>
         {isMobile ? (
            <CSSTransition
               in={navbarOpen}
               nodeRef={nodeRef}
               timeout={300}
               mountOnEnter
               unmountOnExit
               classNames={{
                  appear: classes.ListAppear,
                  appearActive: classes.ListAppearActive,
                  enter: classes.ListEnter,
                  enterActive: classes.ListEnterActive,
                  exit: classes.ListExit,
                  exitActive: classes.ListExitActive
               }}>
               <NavbarListStyle ref={nodeRef}>
                  <StyledLi to='/recipes'>Recipes</StyledLi>
                  <StyledLi to='/videos'>Videos</StyledLi>
                  <StyledLi to='/menu-items'>Menu Items</StyledLi>
                  <Toggle />
               </NavbarListStyle>
            </CSSTransition>
         ) : (
            <NavbarListStyle ref={nodeRef}>
               <StyledLi to='/recipes'>Recipes</StyledLi>
               <StyledLi to='/videos'>Videos</StyledLi>
               <StyledLi to='/menu-items'>Menu Items</StyledLi>
               <Toggle />
            </NavbarListStyle>
         )}
      </>
   )
}

export default NavbarList
