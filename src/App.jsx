import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import RootLayout from "./pages/root/RootLayuot";
import routes from "./routes";
import authRoutes from "./routes/authRoutes";
import AuthLayout from "./pages/auth/AuthLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

import "./App.css";

const App = () => {
  const isAuthenticated = useSelector((state) => state.client.isAuthenticated);

  return (
    <main className="flex flex-col">
      <Router>
        <Switch>
          {routes.map((route) => {
            const Page = route.element;
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  return (
                    <RootLayout>
                      <Page {...props} />
                    </RootLayout>
                  );
                }}
              />
            );
          })}
          {authRoutes.map((route) => {
            const Page = route.element;
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  return (
                    <AuthLayout>
                      <Page {...props} />
                    </AuthLayout>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
      <ToastContainer />
    </main>
  );
};

export default App;
