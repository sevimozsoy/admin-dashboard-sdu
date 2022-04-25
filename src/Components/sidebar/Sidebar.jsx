import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <GroupIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>General Settings</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar