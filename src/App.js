import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";

  // Way 1 of fetching data
  // const getProducts = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setRecords(data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  //Way 2 of fetching data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecords(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading
        ? "Loading"
        : records &&
          records.map((record) => {
            return (
              <p key={record.website + record.key}>
                <li>{record.website} </li>
              </p>
            );
          })}
    </div>
  );
}
