import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Patients from "./pages/Patients";

function App() {
  return (
    <div>
      <div className="p-3 mx-3">
        <Navbar />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Patients />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
