import axios from "axios";
import { useEffect, useState } from "react";

export const ThreadList = () => {
  const [theads, setTheads] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
      )
      .then((response) => {
        setTheads(response.data);
      });
  }, []);
  const ThreadGet = () => {
    if (theads !== undefined) {
      return (
        <ul>
          {theads.map((data) => (
            <il key={data.id}>{data.title}</il>
          ))}
        </ul>
      );
    }
  };
  return (
    <div>
      <ThreadGet />
    </div>
  );
};
