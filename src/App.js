//import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layout";
import PrivateRoute from "/src/Routes/PrivateRoute";
import routes from "./config/routes";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Location from "./pages/Location";
import Warning from "./pages/Warning";
import Searching from "./pages/Searching";
import History from "./pages/History";
import Setting from "./pages/Setting";
import Information from "./pages/Information";

function App() {
  const isAuthenticated = true;
  //console.log("state=", isAuthenticated);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={routes.login} element={<Login />} />
          <Route element={<PrivateRoute isAuthenticated={true} />}>
            <Route path={routes.history} element={<History />} />
          </Route>
          <Route element={<PrivateRoute isAuthenticated={true} />}>
            <Route path={routes.setting} element={<Setting />} />
          </Route>
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path={routes.manage} element={<Manage />} />
          </Route>
          <Route
            path={routes.dashboard}
            element={
              <DefaultLayout>
                <Warning />
              </DefaultLayout>
            }
          />
          <Route element={<PrivateRoute isAuthenticated={true} />}>
            <Route path={routes.information} element={<Information />} />
          </Route>
          <Route element={<PrivateRoute isAuthenticated={true} />}>
            <Route
              path={routes.location}
              element={
                <DefaultLayout>
                  <Location />
                </DefaultLayout>
              }
            />
          </Route>
          <Route element={<PrivateRoute isAuthenticated={true} />}>
            <Route
              path={routes.home}
              element={
                <DefaultLayout>
                  <Home />
                </DefaultLayout>
              }
            />
          </Route>
          <Route element={<PrivateRoute isAuthenticated={true} />}>
            <Route path="/timduong" element={<Searching />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;

// {publicRoutes.map((route, index) => {
//   const Page = route.component;

//   let Layout = DefaultLayout;

//   if (route.layout) {
//     Layout = HeaderOnly;
//   } else if (route.layout === null) {
//     Layout = Fragment;
//   }

//   return (
//     <Route
//       key={index}
//       path={route.path}
//       element={
//         <Layout>
//           <Page />
//         </Layout>
//       }
//     />
//   );
// })}
