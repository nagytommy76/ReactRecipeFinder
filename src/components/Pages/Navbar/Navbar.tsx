import React, { useEffect, useCallback } from 'react'
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

   const handleWindowSizeChange = useCallback(() => {
      if (window.innerWidth < 815) {
         dispatch(setMobileSize(true))
      } else {
         dispatch(setMobileSize(false))
      }
   }, [dispatch])

   useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange)
      }
   }, [handleWindowSizeChange])

   useEffect(() => {
      handleWindowSizeChange()
      // eslint-disable-next-line
   }, [])

   const openNavbar = () => {
      dispatch(setNavbarOpen(true))
   }
   const closeNavbar = () => {
      dispatch(setNavbarOpen(false))
   }

   return (
      <StyledNavbar navbarOpen={isNavbarOpen} data-testid='navbar'>
         <Header>
            <Link onClick={closeNavbar} to='/'>
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

         <NavbarList closeNavbar={closeNavbar} />
      </StyledNavbar>
   )
}

export default Navbar
