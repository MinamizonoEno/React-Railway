import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MessageList = (props) => {
  const navigate = useNavigate();
  const [messageList, setmessageList] = useState([1, 2, 3]);
  return (
    <>
      <ul>
        {messageList.map((data) => {
          <li key={data}>{data}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        スレッド一覧へ戻る
      </button>
    </>
  );
};
