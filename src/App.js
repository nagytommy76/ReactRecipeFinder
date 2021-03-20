import React, { Suspense } from 'react'
import Navbar from './components/Pages/Navbar/Navbar'
import Footer from './components/Pages/Footer/Footer'
import WelcomePage from './components/Pages/Welcome/Welcome'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const SearchRecipes = React.lazy(() => import('./components/Pages/SearchRecipes/SearchRecipes'))

function App() {
  return (
    <>
      <Router>
          <Navbar />
            <Switch>
              <Route path="/" exact component={WelcomePage}/>
              <Suspense fallback={<h1>Loading...</h1>}>
                <Route path="/recipes" component={SearchRecipes}/>
              </Suspense>
            </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;
