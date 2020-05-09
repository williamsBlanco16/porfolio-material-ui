import React from 'react';
import Home from './components';
import { CssBaseline} from '@material-ui/core'
import {Route} from 'react-router-dom'
import './App.css'
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contacts" component={Contact}/>

    </>
  );
}

export default App;
