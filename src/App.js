import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TodoApp from "./pages/TodoApp";

function App() {
  return (
    <>
      <Router>
        <Routes basename="Portfolio-React">
          <Route path="/" exact element={<Home />} />
          <Route path="/todoapp" element={<TodoApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
