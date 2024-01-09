import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Dashboard/Home";
import Users from "./pages/Dashboard/Users";
import About from "./pages/Dashboard/About";
import UserDetail from "./pages/Dashboard/UserDetail";
import NotFound404 from "./pages/NotFound404";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// layouts
import DashboardLayout from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";

const Router = () => (
  <Routes>
    <Route Component={DashboardLayout}>
      <Route path="/" Component={Home} />
      <Route path="users">
        <Route index Component={Users} />
        <Route path=":id" Component={UserDetail} />
      </Route>
      <Route path="about" Component={About} />
    </Route>

    <Route path="auth" Component={AuthLayout}>
      <Route index Component={Login} />
      <Route path="register" Component={Register} />
    </Route>
    <Route path="*" Component={NotFound404} />
  </Routes>
);

export default Router;
