import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/navigations/Sidebar'

function Home() {
    return (
        <div className="flex flex-row w-full h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 p-5 overflow-auto scrollbar scrollbar-thin-gray-900 scrollbar-track-gray-100">
                <Outlet />
            </div>
        </div>
    )
}

export default Home