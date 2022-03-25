import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Fetch } from "./api/api";
function Profile() {
  const [items, setItems] = useState();

  let api = Fetch();
  const set = () => {
    api.then((data) => {
      List(data);
      console.log(data);
    });
  };
  let obj;

  const List = (arr) => {
    obj = (
      <>
        {arr.data.map((element, i) => (
          <li key={i}>{element.fact}</li>
        ))}
      </>
    );

    setItems(obj);
  };
  return (
    <>
      <button className="btn btn-primary" onClick={set}>
        Fetch
      </button>
      <ul>{items ? items : ""}</ul>
    </>
  );
}

export default Profile;
