import React from "react";
import "./user.css";

const index = (props) => {
  const { name, email, id } = props;
  return (
    <div className="container">
      <div className="id"> {id} </div>
      <div className="name"> {name} </div>
      <div className="email"> {email} </div>
    </div>
  );
};

export default index;