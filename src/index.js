import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './styles/index.css';
import LoginForm from './components/LoginForm';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';
import { Provider } from "react-redux";

ReactDOM.render(

    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>




  , document.getElementById('root'));
registerServiceWorker();
