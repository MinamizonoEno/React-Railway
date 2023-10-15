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
    console.log(theads);
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
    </div>
  );
};
