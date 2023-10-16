import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThreadList } from "./ThreadList";
import { ThreadPost } from "./ThreadPost";
import { NotFound } from "./NotFound";

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
          <Route path={"/thread/new"} element={<ThreadPost />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
