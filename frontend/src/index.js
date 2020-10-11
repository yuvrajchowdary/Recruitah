import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import ParticleComponent from "./ParticleComponent";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        
        }}
      >
    
            <ParticleComponent />

            <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >

    <App />
    </div>
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
