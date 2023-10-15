import logo from "./logo.svg";
import "./App.css";
import { ThreadList } from "./ThreadList";

export const App = () => {
  return (
    <div className="App">
      <header>
        <h1>掲示板</h1>
      </header>
      <ThreadList />
    </div>
  );
};
