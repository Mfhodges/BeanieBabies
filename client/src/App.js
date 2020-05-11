import { Switch, Route } from 'react-router-dom'
import React, {Fragment, useEffect} from 'react'
import ReactGA from 'react-ga'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Random from './pages/Random'
import About from './pages/About'
import BBProfile from './pages/BBProfile'
import Birthday from './pages/Birthday'
import Search from './pages/Search'

import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-165762946-2');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })


return (
  <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>hello world</p>
</div>
);
}

export default App;



/** 
  <ApolloProvider client={apolloClient}>
  <Fragment>
      <Header />
      <div id="main">
        <div id="content">
          <div>
            <article role="article">
            <Switch>
            <Route path="/search">
                <Search />
              </Route>
              <Route exact path="/" component={Home} />
              <Route path="/random">
                <Random />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/birthday">
                <Birthday />
              </Route>
              <Route path="/beanies/:bbID" component={BBProfile}/>
            </Switch>
              
            </article>
          </div>
        </div>
      </div>
      <Footer />
  </Fragment>
  </ApolloProvider>
*/

/*

<Switch>
        <Route exact path="/" component={Pets} />
      </Switch>
*/