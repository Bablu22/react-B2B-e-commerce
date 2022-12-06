import { HiSquaresPlus } from "react-icons/hi2";
import { AiFillHome, AiFillShopping, AiFillDatabase } from "react-icons/ai";
import { FaUserAlt, FaUsers } from "react-icons/fa"

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: "home",
        label: "Home",
        path: "/",
        icon: <AiFillHome />,
    },
    {
        key: "orders",
        label: "Orders",
        path: "/orders",
        icon: <AiFillShopping />,
    },
    {
        key: "products",
        label: "Products",
        path: "/products",
        icon: <HiSquaresPlus />,
    },
    {
        key: "manage",
        label: "Manage",
        path: "/manage",
        icon: <AiFillDatabase />,
    },
    {
        key: "customers",
        label: "Customers",
        path: "/customers",
        icon: <FaUsers />,
    },
    {
        key: "account",
        label: "Account",
        path: "/account",
        icon: <FaUserAlt />,
    },
];
