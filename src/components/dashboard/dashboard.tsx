import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./dashboard.scss"
import { Button, Col, Row, Switch } from 'antd'

import storesIcon from "../../assets/icons/store-alt.svg"
import wifiIcon from "../../assets/icons/wifi-alt.svg"
import riderIcon from "../../assets/icons/biking-mountain.svg"
import starIcon from "../../assets/icons/star-outlined.svg"
import dollarSign from "../../assets/icons/dollarSign.svg"
import arrowUpRight from "../../assets/icons/arrow-up-right.svg"
import OrderCard from '../ordersRequests/orderCard/orderCard'


const ordersRequestsData = [
  {
    orderId: "#87SDSD",
    senderName: "Jhon Doe",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: false,
    status: ""
  },
  {
    orderId: "#48HWSD",
    senderName: "Sara Andrew",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: true,
    status: "Picked from shop"
  },
  {
    orderId: "#87SD98S",
    senderName: "Mark roger",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: true,
    status: "Ready for pickup"
  },
  {
    orderId: "#09SDDS",
    senderName: "Save Mart",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: true,
    status: "Delivered"
  },

]
const Dashboard = () => {
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false);

  const [onlyViewOrders, setOnlyViewOrders] = useState(false)

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

  const onToogleOrders = (checked: boolean) => {
    setOnlyViewOrders(checked)
  };


  return (
    <div className="dashboard-main-wrapper">
      <div className="common-head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <h3>Rider's Dashboard</h3>
        </div>
      </div>
      <br />

      {isMobile &&
        <div>
          <Switch id='view_orders' onChange={onToogleOrders} />
          <label htmlFor="view_orders"> &nbsp;Focus Mode</label>
        </div>
      }

      <br />
      <br />
      <Row gutter={30}>
        {!onlyViewOrders &&
          <Col lg={6} md={24} sm={24} xs={24}>
            <Row gutter={[10, 10]}>
              <Col lg={12} md={6} sm={6} xs={12}>
                <div className="info-main-cards-f" style={{ backgroundColor: "#F0F4FF" }}>
                  <div className='wrp-icon'><img src={riderIcon} width={19} height={19} alt="" /></div>
                  <h3>Today Deliveres</h3>
                  <p>20</p>
                </div>
              </Col>
              <Col lg={12} md={6} sm={6} xs={12}>
                <div className="info-main-cards-f" style={{ backgroundColor: "#FAF8F3" }}>
                  <div className='wrp-icon'><img src={wifiIcon} width={19} height={19} alt="" /></div>
                  <h3>Decline Deliveres</h3>
                  <p>324</p>
                </div>
              </Col>
              <Col lg={12} md={6} sm={6} xs={12}>
                <div className="info-main-cards-f" style={{ backgroundColor: "#EEFCEF" }}>
                  <div className='wrp-icon'><img src={storesIcon} width={19} height={19} alt="" /></div>
                  <h3>Active Nearby stores</h3>
                  <p>30</p>
                </div>
              </Col>
              <Col lg={12} md={6} sm={6} xs={12}>
                <div className="info-main-cards-f" style={{ backgroundColor: "#E5F5FA" }}>
                  <div className='wrp-icon'><img src={starIcon} width={19} height={19} alt="" /></div>
                  <h3>Ratings</h3>
                  <p>3.4</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="wrapper-current-package">
                  <h3>Current Package</h3>
                  <div className="package-details">
                    <h3>Level 2</h3>
                    <p>Price : <span>$ 2,000</span></p>
                    <Button className='package-upgrade-btn'>Upgrade</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        }
        <Col lg={18} md={24} sm={24} xs={24}>
          {!onlyViewOrders &&
            <div className="container-earnings">
              <Row gutter={[0, 10]}>
                <Col lg={4} md={4} sm={24} xs={24}>
                  <div className="earning-icon">
                    <div className="icon-inner">
                      <img src={dollarSign} width={22} height={22} alt="" />
                    </div>
                  </div>
                </Col>
                <Col lg={20} md={20} sm={24} xs={24}>
                  <div className='wrapper-md-er'>
                    <Row gutter={[0, 10]}>
                      <Col lg={18} md={18} sm={24} xs={24}>
                        <div className='earning-content'>
                          <p>Your this month Earnings</p>
                          <h2>& <span>2,647.34</span></h2>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={24} xs={24}>
                        <Button className='nav-wallet-btn'>Go to Wallet</Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          }

          <Row gutter={[20, 20]}>
            {
              ordersRequestsData.slice(0, 4).map((item: any) => (
                <Col lg={12} md={12} sm={24} xs={24}>
                  <OrderCard orderData={item} />
                </Col>
              ))
            }
          </Row>

        </Col>
      </Row>
    </div>
  )
}

export default Dashboard