import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// CSS
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
// Components
import LeftMenuBar from './Components/LeftMenuBar/LeftMenuBar'
import RightMenuBar from './Components/RightMenuBar/RightMenuBar'
// Pages
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Explore from './Pages/Explore'


function App() {

  return (
    <Router>
      <div className="site-container">
        <Row>
          <LeftMenuBar />
          <Col xs={6}>
            <Switch>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route path="/explore">
                    <Explore />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
              </Switch>
          </Col>
          <RightMenuBar />       
        </Row>
      </div> 
    </Router>
  );
}

export default App;