import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={SignUpForm} />
      </Routes>
    </Router>
  );
}

export default App;
