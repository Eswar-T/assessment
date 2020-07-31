import React from 'react';
import Content from './Components/Content'
import NavigationBar from './Components/NavigationBar'
import { Route,Switch } from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'
import Portfollo from './Components/Portfollo'
import Blog from './Components/Blog'

const App = () => {
  return (
    
          <div>
            <NavigationBar/>
            <Switch>
               <Route exact path="/" component={Content} />
               <Route exact path="/contact" component={Contact} />
               <Route exact path="/about" component={About} />
               <Route exact path="/portfollo" component={Portfollo}/>
               <Route exact path="/blog" component={Blog}/>
            </Switch>
          </div>
          
  );
}

export default App;
