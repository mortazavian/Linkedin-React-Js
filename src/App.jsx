import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/auth"
            element={<Authentication></Authentication>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
