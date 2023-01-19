import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Form from "./form/Form";
import Thanks from "./thanks/Thanks";
import NotFound from "./notfound/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
