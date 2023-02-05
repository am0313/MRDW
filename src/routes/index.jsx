import { createBrowserRouter } from "react-router-dom";
import BrowsePage from "../pages/browse";
import GatherPage from "../pages/gather";
import Home from "../pages/home";
import NoticePage from "../pages/notice";
import authRoutes from "./auth";
import aboutRoutes from "./about";
import SettingsPage from "../pages/settings";

export const routes = [
  ...authRoutes,
  ...aboutRoutes,
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gather",
    element: <GatherPage />
  },
  {
    path: "/browse",
    element: <BrowsePage />
  },
  {
    path: "/notice",
    element: <NoticePage />
  },
  {
    path: "/settings",
    element: <SettingsPage />
  },
]

const router = createBrowserRouter(routes);

export default router;
