import { useState } from "react";
import "./style.css";

export const App = () => {
  const [study, setStudy] = useState("");
  const [time, setTime] = useState("");
  const [records, setRecords] = useState([
    { title: "りあくと", time: 1 },
    { title: "じゃばすくりぷと", time: 3 },
  ]);
  const [error, setError] = useState("");

  const onChangeStudy = (event) => {
    setStudy(event.target.value);
  };
  const onChangeTime = (event) => {
    setTime(event.target.value);
  };
  const onClickadd = () => {
    if (study === "" || time === "") {
      setError("入力されていない項目があります");
    } else {
      const newRecords = [...records, { title: study, time: time }];
      setRecords(newRecords);
      setError("");
    }
  };

  return (
    <>
      <div className="flex">
        <p>学習内容</p>
        <input value={study} onChange={onChangeStudy}></input>
      </div>
      <div className="flex">
        <p>学習時間</p>
        <input type="number" onChange={onChangeTime}></input>
      </div>
      <div className="flex">
        <p>入力されている学習内容:</p>
        <p>{study}</p>
      </div>
      <div className="flex">
        <p>入力されている時間:</p>
        <p>{time}時間</p>
      </div>
      <button onClick={onClickadd}>登録</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.title}: {record.time}時間
          </li>
        ))}
      </ul>
      <p>合計時間:0/1000h</p>
    </>
  );
};
