import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import HomePage from "./Pages/HomePage";
import Success from "./Pages/Success";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Toaster />
  </Router>
}

export default App;