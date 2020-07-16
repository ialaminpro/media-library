import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import MediaLibrary from './components/MediaLibrary/MediaLibrary';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import UploadImage from "./components/MediaLibrary/UploadImage";

function App() {
  return (
      <div>
          <Header></Header>
          <div className="main">
              <div className="col-11 pl-0 pb-3 col-sm-11 col-md-8 m-auto">
                  <h3>Media Library</h3>
              </div>
              <div className="col-11 col-sm-11 col-md-8 m-auto">
                  <div className="card border-dark mb-3">
                      <Router>
                        <Switch>
                          <Route exact path="/">
                            <MediaLibrary></MediaLibrary>
                              <UploadImage/>
                          </Route>
                              {/*<Route path="*">*/}
                              {/*  <NotFound></NotFound>*/}
                              {/*</Route>*/}
                        </Switch>
                      </Router>

                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
