import "./App.css"
import Header from "./components/Header";
import Home from "./pages/home/Home";
import View from "./pages/view/View"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEdit from "./pages/addedit/AddEdit";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/update/:id" element={<AddEdit />} />
            <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
