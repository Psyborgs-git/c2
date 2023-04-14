import Layout from "../Layout";
import Apparel from "../pages/Apparel";
import Authentication from "../pages/Authentication";
import Home from "../pages/Home";
import Outfit from "../pages/Outfit";
import Client from "../pages/Client";
import { cloudrobe } from "../relay/environment";

const routes = [
    {
        path: "/",
        element: <Layout env={cloudrobe} />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "apparel/:id",
                element: <Apparel />,
            },
            {
                path: "outfit/:id",
                element: <Outfit />,
            },
        ]
    },
    {
        path: "/auth",
        element: <Authentication />,
    },
    {
        path: "/client",
        element: <Client />,
    }
]

export default routes;