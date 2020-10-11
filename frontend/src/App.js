import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/homeScreen';
import SigninScreen from './screens/SigninScreen';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header, Icon, Image } from 'semantic-ui-react'
import jobsPosted from './screens/jobsPosted';
import spocScreen from './screens/spocScreen';
import facultyScreen from './screens/facultyScreen';


function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">

          <div className="brand">
            <a href="index.html">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <span className="brand-name">
              RECRUITAH!

          </span>

          </div>

          <div className="header-links">
            {
              userInfo ? <span><Link to="/profile"><Icon name="user" />{userInfo.name}</Link><div><ul><li><Icon name='users' circular /></li>College Community</ul></div></span>:
                <Link to="/signin">Sign In</Link>
            }
          <Link to="/jobsPosted">JobsPosted Screen</Link>
          <Link to="/spoc">SPOC Screen</Link>
          <Link to="/faculty">Faculty Screen</Link>
          <Link to="/">Home</Link>

          </div>
         

        </header>

        <main className="main">
          <div className="content">

            <Route path="/signin" component={SigninScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/jobsPosted" exact={true} component={jobsPosted} />
            <Route path="/spoc" exact={true} component={spocScreen} />
            <Route path="/faculty" exact={true} component={facultyScreen} />


          </div>
        </main>

        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
