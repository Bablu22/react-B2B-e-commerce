import React from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../../data/Links";
import SidebarLink from "./SidebarLink";


export default function Sidebar() {
    return (
        <div
            className={`flex-col p-3 md:flex bg-neutral-900 w-60`}
        >
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>

            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                <button>dwd</button>
            </div>
        </div>
    );
}
