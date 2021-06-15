import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledNavbar, Title, IconSpan, Header } from './NavStyle'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setMobileSize, setNavbarOpen } from '../../../store/Slices/MobileSizeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarList from './NavbarList/NavbarList'

const Navbar: React.FC = () => {
   const dispatch = useAppDispatch()
   const isMobileSize = useAppSelector((state) => state.mobileReducer.isMobileSize)
   const isNavbarOpen = useAppSelector((state) => state.mobileReducer.isNavbarOpen)
   const handleWindowSizeChange = () => {
      if (window.innerWidth < 815) {
         dispatch(setMobileSize(true))
         dispatch(setNavbarOpen(true))
      } else {
         dispatch(setMobileSize(false))
         dispatch(setNavbarOpen(false))
      }
   }
   useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange)
      }
   }, [handleWindowSizeChange])

   const openNavbar = () => {
      dispatch(setNavbarOpen(true))
   }
   const closeNavbar = () => {
      dispatch(setNavbarOpen(false))
   }

   return (
      <StyledNavbar navbarOpen={isNavbarOpen} data-testid='navbar'>
         <Header>
            <Link to='/'>
               <Title>React Recipe Finder</Title>
            </Link>
            {isMobileSize && (
               <IconSpan>
                  {isNavbarOpen ? (
                     <FontAwesomeIcon onClick={closeNavbar} icon={['fas', 'times']} size='2x' />
                  ) : (
                     <FontAwesomeIcon onClick={openNavbar} icon={['fas', 'bars']} size='2x' />
                  )}
               </IconSpan>
            )}
         </Header>

         <NavbarList />
      </StyledNavbar>
   )
}

export default Navbar
