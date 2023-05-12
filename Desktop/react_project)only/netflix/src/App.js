import "./App.scss";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Hoome from "./Components/Home/Hoome";
import Header from "./Components/Header/Header";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={ <Hoome />   } />
      </Routes>
    </Router>
  );
}

export default App;
