import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GameSettings from './view/GameSettings';
import FightDetails from './view/FightDetails';
import './App.css';

export interface IAppProps {}
class App extends React.Component<IAppProps> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GameSettings} />
          <Route path="/brawl" component={FightDetails} />
          <Route render={() => <p>YOU LOST THE NORTH JON SNOW !</p>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
