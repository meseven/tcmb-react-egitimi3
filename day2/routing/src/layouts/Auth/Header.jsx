import { useLocation, Link } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="auth-menu">
      {pathname !== "/auth" ? (
        <Link to="/auth">Login</Link>
      ) : (
        <Link to="/auth/register">Register</Link>
      )}
    </div>
  );
}

export default Header;
