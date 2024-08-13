import "./App.css";
import ListServices from "./components/ListServices";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUsComp from "./components/AboutUsComp";
import AboutUsComp2 from "./components/AboutUsComp2";
import Footer from "./components/Footer";
import FooterAnimation from "./components/Footer/FooterAnimation";
import "bootstrap/dist/css/bootstrap.css";
import AboutPage from "./pages/AboutPage";
import OurProject from "./components/OurProject";
import Card from "./components/Card";
import Careers from "./pages/Careers";
import MeetTeam from "./components/MeetTeam";
import ContactUs from "./components/ContactUs";
import JoinUs from "./pages/JoinUs";
import CaseStudy from "./pages/CaseStudy";
import HomePage from "./pages/HomePage";
import BestEmp from "./components/BestEmp";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReactLoading from "react-loading";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/footer" exact>
            <FooterAnimation />
          </Route>
          <Route path="/Careers" exact>
            <Careers />
          </Route>
          <Route path="/AboutPage" exact>
            <AboutPage />
          </Route>
          <Route path="/JoinUs" exact>
            <JoinUs />
          </Route>
          <Route path="/CaseStudy" exact>
            <CaseStudy />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
