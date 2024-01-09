import PropTypes from "prop-types";

const Loading = ({ message }) => <div>{message}</div>;

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: "Loading...",
};

export default Loading;
