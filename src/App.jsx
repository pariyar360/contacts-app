import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users"
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
