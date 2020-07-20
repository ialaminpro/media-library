import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import MediaLibrary from './components/MediaLibrary/MediaLibrary';
import Header from './components/Header/Header';
import PhotoEdit from "./components/Photo/PhotoEdit";

function App() {
  return (

      <div>
          <Header></Header>
          <Router>
            <Switch>
              <Route exact path="/">
                <MediaLibrary></MediaLibrary>
              </Route>
              <Route  path="/:slug" component={PhotoEdit} />
              <Route  path="/:slug" component={PhotoEdit} />
              <Route  path="/:slug" component={PhotoEdit} />
            </Switch>
          </Router>
      </div>

  );
}
export default App;
