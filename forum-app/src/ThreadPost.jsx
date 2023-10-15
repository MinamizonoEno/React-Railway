import { useNavigate } from "react-router-dom";

export const ThreadPost = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>init</div>
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
