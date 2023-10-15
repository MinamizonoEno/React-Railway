import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThreadList } from "./ThreadList";

export const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <h1>掲示板</h1>
        </header>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<ThreadList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
