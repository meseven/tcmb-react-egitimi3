import { Outlet } from "react-router-dom";
import Header from "./Header";

function AuthLayout() {
  return (
    <div className="auth-container">
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
