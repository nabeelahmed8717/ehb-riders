import { Button, Drawer, Dropdown, Input, MenuProps, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./navBar.scss"

import chat from "../../assets/icons/fi-rr-comment.svg"
import menu from "../../assets/icons/fi-rr-menu-burger.svg"
import RedirectionModals from '../../shared/redirectionModals/redirectionModals'

import UserProfileCard from './userProfileCard/userProfileCard';
import userIcon from "../../assets/raw/userIconOne.svg"
import document from "../../assets/icons/document.svg"
import signOut from "../../assets/icons/fi-rs-sign-out.svg"

import packagesIcon from "../../assets/icons/packages.svg"
import marketingIcon from "../../assets/icons/marketing.svg"
import userCheck from "../../assets/icons/user-check.svg"
import userProfile from "../../assets/icons/user-gear.svg"

import Switch from "../../assets/icons/fi-rr-refresh.svg"
import notificationIcon from "../../assets/icons/notification.svg"
import pssIcon from "../../assets/icons/ehb-companies/companies-logos/pss.svg"

import { CloseOutlined } from '@ant-design/icons';

const NavBar = () => {

    const location = useLocation();
    const route = location.pathname;
    const routeArray = route.split('/');

    console.log("routeArray", routeArray)

    const [isProfileRedirection, setIsProfileRedirection] = useState(false)

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [isDrawerOpen, setisDrawerOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    // scrollnav 
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // scrollnav 

    const [isAdvanceSearch, setIsAdvanceSearch] = useState(false);

    const navigate = useNavigate()

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <UserProfileCard />
            ),
        },
        {
            key: '3',
            label: (
                <div className="drp-items-nav" onClick={() => setIsProfileRedirection(true)} >
                    <img src={userProfile} alt="" /> <p>Manage Profile</p>
                </div>
            ),
        },
        {
            key: '4',
            label: (
                <div className="drp-items-nav" onClick={() => navigate('./trustee-profile')} >
                    <img src={userCheck} alt="" /> <p>Trustee Profile</p>
                </div>
            ),
        },
        {
            key: '5',
            label: (
                <div className="drp-items-nav" >
                    <img src={document} alt="" /> <p>Upload KYC</p>
                </div>
            ),
        },
        {
            key: '6',
            label: (
                <div className="drp-items-nav">
                    <img src={Switch} alt="" /> <p>Switch Dashboards</p>
                </div>
            ),
        },
        {
            key: '7',
            label: (
                <div className="drp-items-nav">
                    <img src={signOut} alt="" /> <p>Sign out</p>
                </div>
            ),
        }
    ]

    const respMenuItems = [


        {
            key: '2',
            label: 'Marketing',
            icon: marketingIcon,
            link: './marketing'
        },
        {
            key: '2',
            label: 'Trustee Profile',
            icon: userCheck,
            link: './trustee-profile'
        },
        {
            key: '6',
            label: "Packages",
            icon: packagesIcon,
            link: './packages'
        },

        {
            key: '3',
            label: 'Switch Dashboards',
            icon: Switch,
            link: './home'
        },
        {
            key: '1',
            label: 'Upload KYC',
            icon: document,
            link: './home'
        },
        {
            key: '5',
            label: 'Sign out',
            icon: signOut,
            link: './home'
        },
    ]


    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        function handleViewportChange(event: any) {
            setIsMobile(event.matches);
        }
        handleViewportChange(mediaQuery);
        mediaQuery.addListener(handleViewportChange);
        return () => {
            mediaQuery.removeListener(handleViewportChange);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const navStylesCheckExcept = [
        {
            route: "home"
        },
        {
            route: "services"
        },
    ]
    const matchingRoute = navStylesCheckExcept.some(item => item.route === routeArray[1]);
    const classToRender = `main-header-wrapper ${matchingRoute ? "" : "main-header-fr-wh"
        } d-flex justify-between align-center anim-low-to-high`;

    return (
        <div
            // className={classToRender}
            className={`main-header-wrapper d-flex justify-between align-center ${isMobile && visible ? "anim-high-to-low" : "anim-low-to-high"}`}
            style={{ top: visible ? 0 : '-100px', }}
        >
            <div className="brand-logo">
                {/* <p style={{ color: "rgb(72 72 72)" }} ><strong>EHB</strong> <br /> <span style={{ fontSize: "11px", color: "rgb(80 80 80)" }}>Franchise</span></p> */}
            </div>
            {isAuthenticated ?
                <div className="nav-menu d-flex align-items-center">

                    {!isMobile &&
                        <>
                            {/* <Button className="rounded-buttons-nav" onClick={() => navigate('./home')}><img src={homeIcon} width={20} height={20} alt="" /></Button> */}
                            {/* <Button className="rounded-buttons-nav" onClick={() => navigate('./services')}><img src={services} width={20} height={20} alt="" /></Button> */}
                            <Button className="rounded-buttons-nav" onClick={() => navigate('./chat')}><img src={chat} width={20} height={20} alt="" /><div className='sp-only-chat'>5</div></Button>
                            <Button className="rounded-buttons-nav" onClick={() => navigate('./cart')}><img src={notificationIcon} width={20} height={20} alt="" /><div className='sp-only-chat'>2</div></Button>
                            <div className="user-profile-wrapper">
                                <Dropdown menu={{ items }} placement="bottomRight" arrow overlayClassName='pro-drp'>
                                    <div className="user-profile">
                                        <div className="user-img-wrapper"><img src={userIcon} alt="" /></div>
                                    </div>
                                </Dropdown>
                            </div>
                        </>}

                    {isMobile && <Button className="rounded-buttons-nav" onClick={() => navigate('./chat')}><img src={chat} width={20} height={20} alt="" /><div className='sp-only-chat'>5</div></Button>}
                    {isMobile && <Button className="rounded-buttons-nav" onClick={() => navigate('./home')}><img src={notificationIcon} width={20} height={20} alt="" /><div className='sp-only-chat'>2</div></Button>}
                    {isMobile && <Button className="rounded-buttons-nav" onClick={() => setisDrawerOpen(true)}><img src={menu} width={20} height={20} alt="" /></Button>}

                    <Drawer
                        title={<div className="d-flex justify-between align-center"><span className='fs-15 fw-600'>Menu</span><span onClick={() => setisDrawerOpen(false)}><CloseOutlined /></span></div>}
                        placement="left"
                        closable={false}
                        onClose={() => setisDrawerOpen(false)}
                        open={isDrawerOpen}
                        key="left"
                    >
                        <UserProfileCard isMobile={isMobile} />
                        {
                            respMenuItems.map((item: any) => (
                                <div className="drp-items-nav" onClick={() => { item.link && navigate(`${item.link}`); setisDrawerOpen(false) }} style={{ marginTop: '10px' }} key={item.key}>
                                    <img src={item.icon} alt="" /> <p>{item.label}</p>
                                </div>
                            ))
                        }

                    </Drawer>

                </div>
                :
                <div>
                    <Button className='login-btn' onClick={() => navigate('./sign-in')} >Sign In</Button>
                </div>
            }


            <RedirectionModals
                title="Manage Profiles"
                icon={pssIcon}
                iconTitle='PSS'
                iconDisp='Personal Security Service'
                message="Profiles are managed by EHB PSS (Personal Security Service)"
                confirmationMsg='Are you sure to redirect to PSS ?'
                modalOpen={isProfileRedirection}
                setIsModalOpen={setIsProfileRedirection}
                navigation="https://pss-ehb.vercel.app/user-Profile"
            />
        </div>
    )
}

export default NavBar