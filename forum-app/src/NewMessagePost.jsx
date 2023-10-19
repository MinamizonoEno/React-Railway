import axios from "axios";

export const NewMessagePost = (props) => {
  //受け取った文をapiに送信
  const NewMessage = (title) => {
    axios
      .post(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" +
          props.postDataId +
          "/posts",
        { post: title }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //formのボタンが押されるとformの文を関数に渡す
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { value: threadTitle } = event.target.threadTitle;
    await NewMessage(threadTitle);
    await props.getPosts();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          投稿
          <input type="text" name="threadTitle" defaultValue="" />
        </label>
        <input type="submit" value="投稿" />
      </form>
    </>
  );
};
