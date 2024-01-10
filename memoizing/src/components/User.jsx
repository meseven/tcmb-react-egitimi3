import React from "react";

const User = ({ data }) => {
  console.log("User component re-render");
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

const MemoizedUser = React.memo(User);

export default MemoizedUser;
