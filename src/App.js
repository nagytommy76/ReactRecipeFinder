import './index.css';
import React, { Suspense } from 'react'
import Navbar from './components/Pages/Navbar/Navbar'
import Footer from './components/Pages/Footer/Footer'
import WelcomePage from './components/Pages/Welcome/Welcome'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from './components/BaseComponents/BaseLoading/BasePageSpinner'
const SearchRecipes = React.lazy(() => import(/* webpackChunkName: "SearchRecipesPage" */'./components/Pages/SearchRecipes/SearchRecipes'))
const RecipeDetails = React.lazy(() => import(/* webpackChunkName: "RecipeDetails" */'./components/Pages/RecipeDetails/RecipeDetails.jsx'))

function App({ loading }) {
  return (
    <>
      <Router>
          {loading ? <Loading isLoading={loading}/> : null }
          <Navbar />
            <Switch>
              <Route path="/" exact component={WelcomePage}/>
              <Suspense fallback={<Loading isLoading />}>
                <Route path="/recipes" component={SearchRecipes}/>
                <Route path="/details/:recipeId" component={RecipeDetails}/>
              </Suspense>
            </Switch>
          <Footer />
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loadingReducer.loading
    }
}

export default connect(mapStateToProps)(App);
