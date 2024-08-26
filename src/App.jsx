import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RootLayout from "./pages/root/RootLayuot";
import HomePage from "./pages/root/autlet/HomePage";
import routes from "./routes";

import { ToastContainer } from "react-toastify";

import "./App.css";

const App = () => {
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
                exact={true}
                render={(props) => (
                  <RootLayout>
                    <Page {...props} />
                  </RootLayout>
                )}
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
