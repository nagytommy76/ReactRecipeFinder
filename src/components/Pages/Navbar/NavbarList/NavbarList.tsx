import React from 'react'
import { NavbarListStyle, StyledLi } from './ListStyle'
import Toggle from '../ThemeToggler/Toggle'

const NavbarList: React.FC = () => {
   return (
      <NavbarListStyle>
         <StyledLi to='/recipes'>Recipes</StyledLi>
         <StyledLi to='/videos'>Videos</StyledLi>
         <StyledLi to='/menu-items'>Menu Items</StyledLi>
         <Toggle />
      </NavbarListStyle>
   )
}

export default NavbarList
