import React from "react";
import PropTypes from "prop-types";

const RandomNumber = ({ length }) => {
  const numbers = Array.from({ length }, () => Math.floor(Math.random() * 20));

  console.log("RandomNumber re-render");

  return <pre>{JSON.stringify(numbers, null, 2)}</pre>;
};

export const MemoizedRandomNumber = React.memo(RandomNumber);

RandomNumber.propTypes = {
  length: PropTypes.number,
};

// export default React.memo(RandomNumber);
