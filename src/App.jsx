import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import HyruleDetail from './views/HyruleDetail/HyruleDetail';
import HyruleList from './views/HyruleList/HyruleList';
import './App.css';

import Home from './views/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Hyrule Compendium</h1>
        <Link to="/category/treasure">Treasure</Link>
        <Link to="/category/monsters">Monsters</Link>
        <Link to="/category/equipment">Equipment</Link>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/entry/:entry">
          <HyruleDetail />
        </Route>
        <Route path="/category/:category">
          <HyruleList />
        </Route>
      </Switch>
      <footer></footer>
    </BrowserRouter>
  );
}
