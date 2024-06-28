import React, { useState } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import * as Icon from 'react-feather';

export const Sidebar = ({userXD}) => {
    const [isAdminOpen, setIsAdminOpen] = useState(false);  
    const toggleAdminMenu = () => {
        setIsAdminOpen(!isAdminOpen);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '250px' }}>
                <CDBSidebarHeader>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontFamily: "Dancing Script", fontSize: '32px' }}>
                        Varsovia
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content" style={{ overflowY: 'auto' }}>
                    <CDBSidebarMenu>
                        <NavLink exact to="/menu" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="book">Menu</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/contact" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="phone">Contact</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/reserve" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="clipboard">Reserve</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/hoursLocation" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="clock">Hours & Location</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/about" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="info">About Varsovia</CDBSidebarMenuItem>
                        </NavLink>
                        <>{userXD  && (
                        
                            <div>
                                <CDBSidebarMenuItem icon="user" onClick={toggleAdminMenu}>
                                    Admin
                                </CDBSidebarMenuItem>
                                {isAdminOpen && (
                                    <div style={{ paddingLeft: '20px' }}>
                                        <NavLink exact to="/admin" className={({ isActive }) => (isActive ? "activeClicked" : "")}>
                                            <CDBSidebarMenuItem icon="clipboard">Menu management</CDBSidebarMenuItem>
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                )}</>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div style={{ padding: '20px 5px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                            <a href="https://www.facebook.com" style={{ color: 'inherit', margin: '0 10px' }}>
                                <Icon.Facebook />
                            </a>
                            <a href="https://www.instagram.com" style={{ color: 'inherit', margin: '0 10px' }}>
                                <Icon.Instagram />
                            </a>
                        </div>
                        all the rights reserved
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};
