import axios from "axios";
import { useEffect, useState } from "react";

export const ThreadList = () => {
  const [Thead, setThead] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=1"
      )
      .then((response) => {
        setThead(response.data);
      });
  }, []);
  const ThreadGet = () => {
    console.log(Thead);
    if (Thead !== undefined) {
      return Thead.map((data) => <div key={data.id}>{data.title}</div>);
    }
  };

  return (
    <div>
      <ThreadGet />
    </div>
  );
};
