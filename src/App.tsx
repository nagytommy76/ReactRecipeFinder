import React, { Suspense } from 'react'
import './index.css'
import Navbar from './components/Pages/Navbar/Navbar'
import Footer from './components/Pages/Footer/Footer'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useAppSelector } from './app/hooks'

import Loading from './components/BaseComponents/BaseLoading/BasePageSpinner'
import WelcomePage from './components/Pages/Welcome/Welcome'

const SearchRecipes = React.lazy(
   () => import(/* webpackChunkName: "SearchRecipesPage" */ './components/Pages/SearchRecipes/SearchRecipes')
)
const RecipeDetails = React.lazy(
   () => import(/* webpackChunkName: "RecipeDetails" */ './components/Pages/RecipeDetails/RecipeDetails')
)
const SearchVideos = React.lazy(
   () => import(/* webpackChunkName: "SearchVideos" */ './components/Pages/SearchVideos/SearchVideos')
)
const MenuItems = React.lazy(() => import(/* webpackChunkName: "MenuItems" */ './components/Pages/MenuItems/MenuItems'))

const App: React.FC = () => {
   const theme = useAppSelector((state) => state.themeReducer.isLightTheme)
   return (
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
         <Router>
            <GlobalStyles />
            <Navbar />
            <Suspense fallback={<Loading isLoading />}>
               <Switch>
                  <Route path='/' exact component={WelcomePage} />
                  <Route path='/recipes' component={SearchRecipes} />
                  <Route path='/videos' component={SearchVideos} />
                  <Route path='/menu-items' component={MenuItems} />
                  <Route path='/details/:recipeId' component={RecipeDetails} />
               </Switch>
            </Suspense>
            <Footer />
         </Router>
      </ThemeProvider>
   )
}

export default App
