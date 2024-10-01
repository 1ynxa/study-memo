import { useState } from "react";
import "./style.css";

export const App = () => {
  const [study, setStudy] = useState("");
  const [time, setTime] = useState();
  const [totalTime, setTotalTime] = useState(0);
  const [records, setRecords] = useState([]);
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
      const newTime = parseFloat(time);
      const newRecords = [...records, { title: study, time: newTime }];
      setTotalTime(totalTime + newTime);
      setRecords(newRecords);
      setError("");
      setStudy("");
      setTime("");
    }
  };

  const onClickDelete = (index) => {
    const deleteRecords = [...records];
    const deletedTime = deleteRecords[index].time;
    deleteRecords.splice(index, 1);
    setRecords(deleteRecords);
    setTotalTime(totalTime - deletedTime);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <div className="flex">
          <p>学習内容</p>
          <input value={study} onChange={onChangeStudy}></input>
        </div>
        <div className="flex">
          <p>学習時間</p>
          <input type="number" value={time} onChange={onChangeTime}></input>
        </div>
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
            {record.title}: {record.time}時間{" "}
            <button onClick={() => onClickDelete(index)}>削除する</button>
          </li>
        ))}
      </ul>
      <p>合計時間:{totalTime}/1000h</p>
    </>
  );
};
