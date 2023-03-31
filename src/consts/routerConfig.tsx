import Layout from "../Layout";
import Authentication from "../pages/Authentication";
import Clients from "../pages/Clients";
import Home from "../pages/Home";

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