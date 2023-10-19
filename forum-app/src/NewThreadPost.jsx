import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NewThreadPost = () => {
  const navigate = useNavigate();

  //受け取った文をapiに投げる関数
  const createThread = (title) => {
    axios
      .post(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
        { title: title }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //formの投稿ボタンが押されると発火してform内の文を関数に渡す
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value: threadTitle } = event.target.threadTitle;
    createThread(threadTitle);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          新規スレッドタイトル
          <input type="text" name="threadTitle" defaultValue="" />
        </label>
        <input type="submit" value="投稿" />
      </form>
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
