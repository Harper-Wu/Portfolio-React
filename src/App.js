import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TodoApp from "./pages/TodoApp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes basename="Portfolio-React">
          <Route path="/" exact element={<Home />} />
          <Route path="/todoapp" element={<TodoApp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
