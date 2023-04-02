import Layout from "../Layout";
import Apparel from "../pages/Apparel";
import Authentication from "../pages/Authentication";
import Clients from "../pages/Clients";
import Home from "../pages/Home";
import Outfit from "../pages/Outfit";

const routes = [
    {
        path: "/",
        element: <Layout />,
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
            {
                path: "auth",
                element: <Authentication />,
            },

        ]
    },
    {
        path: "clients",
        element: <Clients />,
    }
]

export default routes;