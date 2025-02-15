import Landing from "../../components/feature/Landing/Landing";
import AboutUs from "../../components/feature/AboutUs/AboutUs";
const rootRoutes = [
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/about",
        element: <AboutUs />
    }
]

export default rootRoutes;
