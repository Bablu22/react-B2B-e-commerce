import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

const linkClass = "flex items-center gap-2 font-medium px-3 py-2  hover:no-underline active:bg-neutral-600 rounded-sm text-base font-roboto mb-2";

function SidebarLink({ link }) {
    const { pathname } = useLocation();

    return (
        <Link
            to={link.path}
            className={classNames(
                pathname === link.path ? "bg-sky-500 text-dark" : "text-neutral-400",
                linkClass
            )}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    );
}

export default SidebarLink
