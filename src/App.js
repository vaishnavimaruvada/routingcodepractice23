import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BlogItemDetails from './components/BlogItemDetails'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import BlogsList from './components/BlogList'
import NotFound from './components/NotFound'

import './App.css'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blogs/:id" component={BlogItemDetails} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
