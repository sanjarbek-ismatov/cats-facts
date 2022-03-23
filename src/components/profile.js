import React, { useState, useEffect } from "react";
import { Fetch } from "./api/api";
function Profile() {
  const [items, setItems] = useState();

  let api = Fetch();
  const set = () => {
    api.then((data) => List(data));
  };
  let obj;
  const List = (arr) => {
    obj = arr.data.map((element) => <li key={element}>{element.fact}</li>);
    setItems(obj);
    return obj;
  };
  return (
    <>
      <button onClick={set}>Fetch</button>
      <ul>{items ? items : ""}</ul>
    </>
  );
}

export default Profile;
