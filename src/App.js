import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TestDebouce from "./debouce/TestDebouce";

function App() {
  return (
    <Routes>
      <Route path="debouce" element={<TestDebouce />}></Route>
    </Routes>
  );
}

export default App;
