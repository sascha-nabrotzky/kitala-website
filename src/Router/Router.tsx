import { createHashRouter } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import Mitglieder from "../pages/mitglieder";
import FAQ from "../pages/faq";
import Download from "../pages/download";
import Impressum from "../pages/impressum";
import Datenschutz from "../pages/datenschutz";
import Inklusion from "../pages/inklusion";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/mitglieder",
    element: <Mitglieder />,
  },
  {
    path: "/inklusion",
    element: <Inklusion />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/impressum",
    element: <Impressum />,
  },
  {
    path: "/datenschutz",
    element: <Datenschutz />,
  },
]);

export default router;
