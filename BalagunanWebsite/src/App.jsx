// eslint-disable-next-line no-unused-vars
import React from "react";
import MainLayout from "./Mainlayout/MainLayout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ReferenceKey from "./components/pages/ReferenceKey";
import LandingPage from "./components/pages/LandingPage";
import ManageAccount from "./components/pages/ManageAccount";
import Profile from "./components/pages/ManageAccountPages/Profile";
import Settings from "./components/pages/ManageAccountPages/Settings";
import Notification from "./components/pages/ManageAccountPages/Notification";
import ActivityLog from "./components/pages/ManageAccountPages/ActivityLog";
import LearnMorePage from "./components/pages/LearnMorePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="manage" element={<ManageAccount />}>
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Settings />} />
        <Route path="notification" element={<Notification />} />
        <Route path="activityLog" element={<ActivityLog />} />
      </Route>
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="ReferenceKey" element={<ReferenceKey />} />
      <Route path="LearnMorePage" element={<LearnMorePage />} />
    </Route>
  )
);
// Fuck gi atay
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
