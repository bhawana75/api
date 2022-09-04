import React, { useEffect, useState } from "react";
import "./user.css";
import SingleUser from "./SingleUser";

const User = () => {
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setInfo(await response.json());
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      {info.map((curElem) => {
        return (
          <>
            <SingleUser
              name={curElem.name}
              id={curElem.id}
              email={curElem.email}
            />
          </>
        );
      })}
    </>
  );
};

export default User;