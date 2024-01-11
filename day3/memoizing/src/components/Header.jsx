import React from "react";

const Header = ({ increase }) => {
  console.log("Header component re-render");
  return (
    <div>
      Header
      <br />
      <button onClick={() => increase(3)}>
        Increase with Header component
      </button>
    </div>
  );
};

const MemoizedHeader = React.memo(Header);

export default MemoizedHeader;
