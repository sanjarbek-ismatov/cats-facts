import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Fetch } from "./api/api";
function Profile() {
  const [items, setItems] = useState();
  const [progress, setProgress] = useState({
    visibility: "hidden",
  });
  let api = Fetch();
  const set = () => {
    api.then((data) => {
      List(data);
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
      <button
        className="btn btn-primary"
        onClick={() => {
          set();
          setProgress({ visibility: "visible" });
          setTimeout(() => {
            setProgress({ visibility: "hidden" });
          }, 1000);
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <ul>{items ? items : ""}</ul>
      <img style={progress} className="loading" src="./loading.png" />
    </>
  );
}

export default Profile;
