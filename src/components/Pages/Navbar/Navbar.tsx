import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledNavbar, Title, IconSpan, Header } from './NavStyle'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setMobileSize } from '../../../store/Slices/MobileSizeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarList from './NavbarList/NavbarList'

const Navbar: React.FC = () => {
   const dispatch = useAppDispatch()
   const isMobileSize = useAppSelector((state) => state.mobileReducer.isMobileSize)
   const [navbarOpen, setNavbarOpen] = useState(false)
   const handleWindowSizeChange = () => {
      if (window.innerWidth < 815) {
         dispatch(setMobileSize(true))
         setNavbarOpen(true)
      } else {
         dispatch(setMobileSize(false))
         setNavbarOpen(false)
      }
   }
   useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange)
      }
   }, [handleWindowSizeChange])

   const openNavbar = () => {
      setNavbarOpen(true)
   }
   const closeNavbar = () => {
      setNavbarOpen(false)
   }

   return (
      <StyledNavbar navbarOpen={navbarOpen} data-testid='navbar'>
         <Header>
            <Link to='/'>
               <Title>React Recipe Finder</Title>
            </Link>
            {isMobileSize && (
               <IconSpan>
                  {navbarOpen ? (
                     <FontAwesomeIcon onClick={closeNavbar} icon={['fas', 'times']} size='2x' />
                  ) : (
                     <FontAwesomeIcon onClick={openNavbar} icon={['fas', 'bars']} size='2x' />
                  )}
               </IconSpan>
            )}
         </Header>

         <NavbarList navbarOpen={navbarOpen} />
      </StyledNavbar>
   )
}

export default Navbar
