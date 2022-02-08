import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import FilmDetail from './Components/Films/FilmDetail';
import FilmPage from './Components/Films/FilmPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Home: filmPage(list of films), Film: FilmDetail(single film + characters) */}
        <h1>Films by Studio Ghibli</h1>
        <Switch>
          <Route exact path="/">
            <FilmPage />
          </Route>
          <Route exact path="/film/:id">
            <FilmDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
