import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ThreadList = () => {
  const navigate = useNavigate();
  const [theads, setTheads] = useState([]);

  //レンタリング時にスレッドの情報を取得
  useEffect(() => {
    axios
      .get(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
      )
      .then((response) => {
        setTheads(response.data);
      });
  }, []);

  //取得したスレッドの情報からタイトルのリストを生成
  const ThreadGet = () => {
    if (theads !== undefined) {
      return (
        <ul>
          {theads.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <ThreadGet />
      <button
        onClick={() => {
          navigate("/thread/new");
        }}
      >
        新規スレッド作成
      </button>
    </div>
  );
};
