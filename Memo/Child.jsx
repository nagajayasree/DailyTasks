import React from "react";

export default React.memo((props) => {
  console.log("name =", props.name);
  return <div>{props.name}</div>;
});
