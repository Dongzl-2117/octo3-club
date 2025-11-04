import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Presentations from "./pages/Presentations";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/presentations" component={Presentations} />
      <Route path="/resources" component={Resources} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route>404 - Page Not Found</Route>
    </Switch>
  );
}

export default App;

