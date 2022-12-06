import classNames from 'classnames';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const linkClass = "flex flex-col items-center  font-medium py-2 hover:no-underline  rounded-sm text-sm font-roboto ";


function BottomLink({ link }) {
    const { pathname } = useLocation();

    return (
        <Link
            to={link.path}
            className={classNames(
                pathname === link.path ? "text-dark" : "text-gray-500",
                linkClass
            )}
        >
            <span className="text-sm">{link.icon}</span>
            {link.label}
        </Link>
    );
}

export default BottomLink

