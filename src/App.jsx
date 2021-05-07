import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home'
import Blog from './components/blog'
import Mitglieder from './components/mitglieder'
import Wissen from './components/faq'
import Download from './components/download'
import Header from './components/header'
import Footer from './components/footer'
import Impressum from './components/impressum'
import Datenschutz from './components/datenschutz'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/mitglieder" component={Mitglieder} />
        <Route exact path="/faq" component={Wissen} />
        <Route exact path="/download" component={Download} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;