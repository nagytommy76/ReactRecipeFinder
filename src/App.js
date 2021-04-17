import './index.css';
import React, { Suspense } from 'react'
import Navbar from './components/Pages/Navbar/Navbar'
import Footer from './components/Pages/Footer/Footer'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from './components/BaseComponents/BaseLoading/BasePageSpinner'
import WelcomePage from './components/Pages/Welcome/Welcome'
const SearchRecipes = React.lazy(() => import(/* webpackChunkName: "SearchRecipesPage" */'./components/Pages/SearchRecipes/SearchRecipes'))
const RecipeDetails = React.lazy(() => import(/* webpackChunkName: "RecipeDetails" */'./components/Pages/RecipeDetails/RecipeDetails.jsx'))


function App({ loading }) {
  return (
    <>
      <Router>
          {loading ? <Loading isLoading={loading}/> : null }
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
    </>
  );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loadingReducer.loading
    }
}

export default connect(mapStateToProps)(App);
