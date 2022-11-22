import routesConfig from "../config/routes";

// import { HeaderOnly } from "../components/Layout";
import Home from "../pages/Home";
import Location from "../pages/Location";
import Login from "../pages/Login";
import Warning from "../pages/Warning";
import Searching from "../pages/Searching";
import History from "~/pages/History";
import Setting from "~/pages/Setting";
import Information from "~/pages/Information";
import { HeaderOnly } from "~/components/Layout";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.location, component: Location },
  { path: routesConfig.login, component: Login, layout: HeaderOnly },
  { path: routesConfig.warning, component: Warning },
  { path: routesConfig.searching, component: Searching },
  { path: routesConfig.history, component: History },
  { path: routesConfig.setting, component: Setting },
  { path: routesConfig.information, component: Information },
];

const privatecRoutes = [];

export { publicRoutes, privatecRoutes };
