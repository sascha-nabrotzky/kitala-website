import { createHashRouter } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import Members from "../pages/Members";
import FAQ from "../pages/faq";
import Download from "../pages/download";
import Imprint from "../pages/imprint";
import Privacy from "../pages/privacy";
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
        element: <Members />,
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
        element: <Imprint />,
    },
    {
        path: "/datenschutz",
        element: <Privacy />,
    },
]);

export default router;
