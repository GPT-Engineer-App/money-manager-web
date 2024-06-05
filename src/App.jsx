import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Index from "./pages/Index.jsx";
import Expenses from "./pages/Expenses.jsx";
import Savings from "./pages/Savings.jsx";
import Investments from "./pages/Investments.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
