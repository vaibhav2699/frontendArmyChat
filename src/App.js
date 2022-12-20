import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import RegistrationPage from "./Pages/Registration/Index";
import Login from "./Pages/Login/Index";
import Home from "./Pages/Home/Index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
