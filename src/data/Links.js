import { FaBookmark, FaRegEdit, FaUserLock } from "react-icons/fa"
import {
    HiUser
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'profile',
        label: 'Your Profile',
        path: '/dashboard',
        icon: <HiUser />
    },
    {
        key: 'edit',
        label: 'Update Profile',
        path: '/dashboard/edit-profile',
        icon: <FaRegEdit />
    },
    {
        key: 'password',
        label: 'Change Password',
        path: '/dashboard/change-password',
        icon: <FaUserLock />
    },
    {
        key: 'bookings',
        label: 'Bookings',
        path: '/dashboard/bookings',
        icon: <FaBookmark />
    },

]

