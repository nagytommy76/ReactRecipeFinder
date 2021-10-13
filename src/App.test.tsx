import React from 'react'
import 'regenerator-runtime'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render, screen, act } from './test-utils'

import App from './App'

describe('testing the <App>', () => {
   beforeEach(() => {
      render(<App />)
   })
   it('should display the Header section', async () => {
      await screen.findByRole('heading', { name: /Welcome to my Recipe Finder app/i })
   })
   it('should display the Navbar section, with 3 routes', async () => {
      await screen.findByText(/recipes/i)
      await screen.findByText(/videos/i)
      await screen.findByText(/menu items/i)
   })
   it('should display the recipes page', async () => {
      const recipePageLink = await screen.findByText(/recipes/i)
      await act(async () => userEvent.click(recipePageLink))

      await screen.findByText('Search Recipes')
      await screen.findByRole('input', { name: /Food name/i })
      await screen.findByRole('input', { name: /Include ingredient/i })
   })
   it('should display the videos page', async () => {
      const videosPageLink = await screen.findByText(/Videos/i)
      await act(async () => userEvent.click(videosPageLink))

      await screen.findByText(/Search Recipe Videos/i)
      await screen.findByRole('input', { name: /Video name/i })
      await screen.findByRole('input', { name: /Results per page/i })
   })
   it('should display the menu items page', async () => {
      const menuItemsLink = await screen.findByText(/Menu Items/i)
      await act(async () => userEvent.click(menuItemsLink))

      await screen.findByText(/Search Menu Items/i)
      await screen.findByRole('input', { name: /Menu Item/i })
   })
})
