import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Price from './views/price'
import Emissions from './views/emissions'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Price} path="/price1" />
        <Route exact component={Emissions} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
