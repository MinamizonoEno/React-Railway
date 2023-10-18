import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewMessagePost } from "./NewMessagePost";

export const MessageList = (props) => {
  const navigate = useNavigate();
  const [messageList, setMessageList] = useState([]);

  //初回レンタリング時に投稿の情報を取得
  useEffect(() => {
    axios
      .get(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" +
          props.postDataId +
          "/posts?offset=0"
      )
      .then((response) => {
        setMessageList(response.data.posts);
      });
  }, [props.postDataId]);

  //実行時に投稿の情報を取得
  const PostGet = () => {
    axios
      .get(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" +
          props.postDataId +
          "/posts?offset=0"
      )
      .then((response) => {
        setMessageList(response.data.posts);
      });
  };

  //投稿をリスト表示
  const PostView = () => {
    if (messageList.length > 0) {
      return (
        <ul>
          {messageList.map((data) => (
            <li key={data.id}>{data.post}</li>
          ))}
        </ul>
      );
    } else {
      <p>投稿されていません</p>;
    }
  };

  return (
    <>
      <PostView />
      <NewMessagePost
        postDataId={props.postDataId}
        messageList={messageList}
        setMessageList={setMessageList}
        PostGet={PostGet}
      />
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
