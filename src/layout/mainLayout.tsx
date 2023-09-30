import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import homeIcon from "../assets/icons/home-res.svg"
import cartIcon from "../assets/icons/cart-res.svg"
import chat from "../assets/icons/fi-rr-comment.svg"
import trendingIcon from "../assets/icons/trending-res.svg"
import plusIcon from "../assets/icons/plus-hex-icon.svg"
import plusGif from "../assets/icons/animated/plus.gif"
import orderIcon from "../assets/icons/orders.svg"
import productsIcon from "../assets/icons/products.svg"
import settingsIcon from "../assets/icons/settings.svg"
import packagesIcon from "../assets/icons/packages.svg"
import marketingIcon from "../assets/icons/marketing.svg"
import verificationIcon from "../assets/icons/check-circle.svg"
import analysisIcon from "../assets/icons/chart-line-up-b.svg"
import guideIcon from "../assets/icons/memo-pad.svg"
import questionIcon from "../assets/icons/question-square.svg"


import NavBar from './navBar/navBar'

import "./mainLayout.scss"
import { Button, Col, Modal, Popover, Row } from 'antd'
import CreateModalSpec from '../shared/createModalSpec/createModalSpec'

// import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import SideBar from './sideBar/sideBar'

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {

    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState<any>(false);
    const [visible, setVisible] = useState(false);
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
    return (
        <>
            <Row>
                {!isMobile &&
                    <Col xs={6} sm={6} md={6} lg={4}>
                        <SideBar />
                    </Col>
                }
                <Col xs={24} sm={24} md={18} lg={20}>
                    <NavBar />
                    <div className="wrapper-layout-outlet">
                        <Outlet />
                    </div>
                </Col>
            </Row>


            {/* <div style={{ paddingBottom: `${isMobile ? '60px' : '0px'}` }}>
                
            </div> */}
            {
                isMobile &&
                <>
                    <div className='bottom-nav-bar'>
                        <div className="nav-icons-box" onClick={() => navigate('./home')}>
                            <img src={homeIcon} width={21} height={21} alt="" />
                            <div>Home</div>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./packages')}>
                            <img src={packagesIcon} width={22} height={21} alt="" />
                            <div>packages</div>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./users-quries')}>
                            <img src={questionIcon} width={22} height={22} alt="" />
                            <div>Quries</div>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./home')}>
                            <img src={analysisIcon} width={22} height={22} alt="" />
                            <div>Reports</div>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./home')}>
                            <img src={guideIcon} width={21} height={21} alt="" />
                            <div>Guide</div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default MainLayout