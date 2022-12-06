import React from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from "../../data/Links"
import BottomLink from './BottomLink'

function BottomBar() {
    return (
        <div className='fixed bg-slate-200 bottom-0 left-0 right-0 w-full md:hidden z-[200]'>
            <div
                className=""
            >
                <div className="flex border-t-2 border-gray-400 justify-around gap-0.5">
                    {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                        <BottomLink key={link.key} link={link} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BottomBar


