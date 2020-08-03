import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Prueba from "./Prueba";
import Counter from "./Counter";
import Relax from "./Relax";
import CounterFn from "./CounterFn";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Counter</Link>
              </li>
              <Link to="/relax">Relax</Link>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={CounterFn} />
            <Route path="/relax" component={Relax} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
