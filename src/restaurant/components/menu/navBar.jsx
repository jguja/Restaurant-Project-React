import React from 'react';
import { useState } from "react";
import {
    CDBContainer,
    CDBNavbar,   
    CDBNavBrand,
    CDBNavToggle,
    CDBNavItem,
    CDBCollapse,
    CDBNavbarNav,
    CDBNavLink,
    CDBIcon,
    CDBBtn,
    CDBDropDown,
    CDBDropDownToggle,
    CDBDropDownMenu

} from 'cdbreact';

export const Navbar = () => {
    const [collapse, setCollapse] = useState(false);

    const bgBlack = { backgroundColor: '#000000', color: '#f4f4f4' };

    return (
        <CDBContainer>
        {/*    <Router style={{ width: '100%' }}>*/}
                <CDBNavbar style={bgBlack} dark expand="md" scrolling>
                    <CDBNavBrand href="/">
                        <strong>Navbar</strong>
                    </CDBNavBrand>
                    <CDBNavToggle
                        onClick={() => {
                            setCollapse(!collapse);
                        }}
                    />
                    <CDBCollapse id="navbarCollapse1" isOpen={collapse} navbar>
                        <CDBNavbarNav left>
                            <CDBNavItem>
                                <CDBNavLink to="#">
                                    <CDBIcon fab icon="facebook-f" />
                                </CDBNavLink>
                            </CDBNavItem>
                            <CDBNavItem>
                                <CDBNavLink to="#">
                                    <CDBIcon fab icon="twitter" />
                                </CDBNavLink>
                            </CDBNavItem>
                            <CDBNavItem>
                                <CDBNavLink to="#">
                                    <CDBIcon fab icon="instagram" />
                                </CDBNavLink>
                            </CDBNavItem>
                        </CDBNavbarNav>
                        <CDBNavbarNav right className="align-items-center">
                            <CDBNavItem active>
                                <CDBBtn circle color="dark" style={{ padding: 0 }}>
                                    <CDBNavLink to="#">
                                        <CDBIcon className="me-2" icon="home" /> Home
                                    </CDBNavLink>
                                </CDBBtn>
                            </CDBNavItem>
                            <CDBNavItem>
                                <CDBBtn circle color="dark" style={{ padding: 0 }}>
                                    <CDBNavLink to="#">
                                        <CDBIcon className="me-2" icon="feather" /> Features
                                    </CDBNavLink>
                                </CDBBtn>
                            </CDBNavItem>
                            <CDBNavItem>
                                <CDBBtn circle color="dark" style={{ padding: 0 }}>
                                    <CDBNavLink to="#">
                                        <CDBIcon className="me-2" icon="dollar-sign" /> Pricing
                                    </CDBNavLink>
                                </CDBBtn>
                            </CDBNavItem>

                            <CDBNavItem>
                                <CDBDropDown>
                                    <CDBDropDownToggle caret style={{ padding: 0 }} color="dark" circle>
                                        <CDBIcon className="me-2" icon="cogs" /> Options
                                    </CDBDropDownToggle>
                                    <CDBDropDownMenu>Coming soon #pleaseStayUpdated.</CDBDropDownMenu>
                                </CDBDropDown>
                            </CDBNavItem>
                        </CDBNavbarNav>
                    </CDBCollapse>
                </CDBNavbar>
            {/*</Router>*/}
        </CDBContainer>
    );
};
