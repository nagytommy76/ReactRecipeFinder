import './index.css';
import React, { Suspense } from 'react'
import Navbar from './components/Pages/Navbar/Navbar.jsx'
import Footer from './components/Pages/Footer/Footer'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from './components/BaseComponents/BaseLoading/BasePageSpinner'
import WelcomePage from './components/Pages/Welcome/Welcome'
const SearchRecipes = React.lazy(() => import(/* webpackChunkName: "SearchRecipesPage" */'./components/Pages/SearchRecipes/SearchRecipes'))
const RecipeDetails = React.lazy(() => import(/* webpackChunkName: "RecipeDetails" */'./components/Pages/RecipeDetails/RecipeDetails.jsx'))


function App({ theme }) {
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
          <Navbar />
            <Suspense fallback={<Loading isLoading />}>
              <Switch>
                <Route path="/" exact component={WelcomePage}/>
                  <Route path="/recipes" component={SearchRecipes}/>
                  <Route path="/details/:recipeId" component={RecipeDetails} />
              </Switch>
            </Suspense>
          <Footer />
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
      theme: state.themeReducer.isLightTheme
  }
}

export default connect(mapStateToProps)(App);