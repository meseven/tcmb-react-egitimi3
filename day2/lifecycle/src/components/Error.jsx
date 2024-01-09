import PropTypes from "prop-types";

const FetchError = ({ message }) => <div>{message}</div>;

FetchError.propTypes = {
  message: PropTypes.string,
};

FetchError.defaultProps = {
  message: "Error!",
};

export default FetchError;
