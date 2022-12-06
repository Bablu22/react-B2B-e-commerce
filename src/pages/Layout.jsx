import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomBar from '../components/navigations/BottomBar'
import Sidebar from '../components/navigations/Sidebar'

function Layout() {
    return (
        <div className="flex flex-row w-full h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <BottomBar />
            <div className="flex-1 p-5 overflow-auto scrollbar scrollbar-thin-gray-900 scrollbar-track-gray-100 relative top-20 z[-1] mb-20">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout