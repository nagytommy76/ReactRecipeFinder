import React from 'react'
import { NavbarListStyle, StyledLi } from './ListStyle'
import Toggle from '../ThemeToggler/Toggle'
import { CSSTransition } from 'react-transition-group'
import classes from './List.module.css'
import { useAppSelector } from '../../../../app/hooks'

const NavbarList: React.FC<{ closeNavbar: () => void }> = ({ closeNavbar }) => {
   const nodeRef = React.useRef(null)
   const isMobile = useAppSelector((state) => state.mobileReducer.isMobileSize)
   const isNavbarOpen = useAppSelector((state) => state.mobileReducer.isNavbarOpen)

   return (
      <>
         {isMobile ? (
            <CSSTransition
               in={isNavbarOpen}
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
                  <StyledLi onClick={closeNavbar} to='/recipes'>
                     Recipes
                  </StyledLi>
                  <StyledLi onClick={closeNavbar} to='/videos'>
                     Videos
                  </StyledLi>
                  <StyledLi onClick={closeNavbar} to='/menu-items'>
                     Menu Items
                  </StyledLi>
                  <Toggle />
               </NavbarListStyle>
            </CSSTransition>
         ) : (
            <NavbarListStyle>
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
