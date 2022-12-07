import React from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../../data/Links";
import SidebarLink from "./SidebarLink";


export default function Sidebar() {
    return (
        <div
            className={`flex-col px-3 lg:flex bg-gray-900 w-60 hidden relative top-20`}
        >
            <div className="flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
        </div>
    );
}
