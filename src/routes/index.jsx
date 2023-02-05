import { createBrowserRouter } from "react-router-dom";
import BrowsePage from "../pages/browse";
import GatherPage from "../pages/gather";
import Home from "../pages/home";
import NoticePage from "../pages/notice";
import authRoutes from "./auth";
import CompanyMRDWPage from "../pages/companyMRDW";
import QnaPage from "../pages/Qna";
import PersonQa from "../pages/Person_qa";

export const routes = [
  ...authRoutes,
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
    path: "/companyMRDW",
    element: <CompanyMRDWPage />
  },
  {
    path: "/qna",
    element: <QnaPage />
  },
  {
    path: "/person_qa",
    element: <PersonQa />
  }

]

const router = createBrowserRouter(routes);

export default router;
