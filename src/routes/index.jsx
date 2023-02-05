import { createBrowserRouter } from "react-router-dom";
import BrowsePage from "../pages/browse";
import GatherPage from "../pages/gather";
import Home from "../pages/home";
import NoticePage from "../pages/notice";
import authRoutes from "./auth";
import aboutRoutes from "./about";

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
]

const router = createBrowserRouter(routes);

export default router;
