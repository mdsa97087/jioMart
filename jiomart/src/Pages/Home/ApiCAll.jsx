import React, { useEffect, useState } from "react";

const GetData = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

GetData();

function ApiCAll() {
  const [data, setData] = useState({});
  useEffect(() => {
    GetData()
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    <img src="" alt="" />
      {data && data.map((el) => (
        <b key={el.id}>{el.title}</b>
      ))}
    </div>
  );
}

export default ApiCAll;
