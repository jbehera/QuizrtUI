import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route, } from 'react-router-dom';
import './styles/App.css';
import Header from '../components/pureComponents/Header';
import Dashboard from './Dashboard';
import WaitingRoom from './WaitingRoom';
import GameEngine from './GameEngine';
import GameEnd from './GameEnd';
import Social from './Social';
import RouteNotFound from './RouteNotFound';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/waitingroom" component={WaitingRoom} />
              <Route path="/ge" component={GameEngine} />
              <Route path="/gameend" component={GameEnd} />
              <Route path="/social" component={Social} />
              <Route component={RouteNotFound} />
            </Switch>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
