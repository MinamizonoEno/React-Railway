import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThreadList } from "./ThreadList";
import { NewThreadPost } from "./NewThreadPost";
import { NotFound } from "./NotFound";
import { MessageList } from "./MessageList";
import { useState } from "react";

export const App = () => {
  //スレッドのIdを保管するstate
  const [postDataId, setPostDataId] = useState("");

  return (
    <>
      <div className="App">
        <header>
          <h1>掲示板</h1>
        </header>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <ThreadList
                postDataId={postDataId}
                setPostDataId={setPostDataId}
              />
            }
          />
          <Route path={"/thread/new"} element={<NewThreadPost />} />
          {/* pathにstateの文をくっつけてページ遷移 */}
          {/* useParam */}
          <Route
            path={"/thread/:" + postDataId}
            element={<MessageList postDataId={postDataId} />}
          />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
