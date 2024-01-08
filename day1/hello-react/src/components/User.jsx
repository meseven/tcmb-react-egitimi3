import PropTypes from "prop-types";

function User({ age, is_admin, detail }) {
  return (
    <div>
      Age: {age}, is_admin: {String(is_admin)}
      <pre>{JSON.stringify(detail, null, 2)}</pre>
    </div>
  );
}

User.propTypes = {
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  is_admin: PropTypes.bool,
  detail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    is_active: PropTypes.bool,
  }),
};

User.defaultProps = {
  is_admin: false,
  detail: {
    name: "Mehmet",
    surname: "Seven",
  },
};

export default User;
