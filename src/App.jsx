import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import HyruleList from './components/HyruleList/HyruleList';

import Home from './views/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Hyrule Compendium</h1>
        <Link to="/category/creatures">Creatures</Link>
        <Link to="/category/monsters">Monsters</Link>
        <Link to="/category/equipment">Equipment</Link>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:category">
          <HyruleList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
