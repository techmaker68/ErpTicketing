import "./App.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Index";
import Login from "./Pages/Auth/Login";
import Tickets from "Pages/Tickets/Tickets";
import TicketDetails from "Pages/Tickets/TicketDetails";
import Report from "Pages/Reports/Report";

import UserManagement from "Pages/Settings/UserManagement";
import TicketSetting from "Pages/Settings/TicketSetting";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {
            // login
          }
          <PrivateRoute path="/" exact>
            <Login />
          </PrivateRoute>
          {
            // Dashboard
          }
          <PrivateRoute path="/dashboard" exact>
            <Dashboard />
          </PrivateRoute>
          {
            // tickets
          }

          <PrivateRoute path="/tickets" exact>
            <Tickets />
          </PrivateRoute>
          <PrivateRoute path="/tickets/detail" exact>
            <TicketDetails />
          </PrivateRoute>
          {
            // Reports
          }

          <PrivateRoute path="/reports" exact>
            <Report />
          </PrivateRoute>

          <PrivateRoute path="/settings" exact>
            <UserManagement />
          </PrivateRoute>

          <PrivateRoute path="/settings/tickets" exact>
            <TicketSetting />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
