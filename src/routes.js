import Auth from "./pages/Auth"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path:DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]