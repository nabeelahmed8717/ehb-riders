import React, { useState } from 'react'
import "./ordersRequests.scss"
import { Button, Col, Row } from 'antd'
import OrderCard from './orderCard/orderCard'
import filterIcon from "../../assets/icons/filter.svg"

const ordersRequestsData = [
  {
    orderId: "#7S3DSD",
    senderName: "Jhon Doe",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: false,
    status: "Un confirmed"
  },
  {
    orderId: "#48H3SD",
    senderName: "Sara Andrew",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: true,
    status: "Picked from shop"
  },
  {
    orderId: "#87SD8S",
    senderName: "Mark roger",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: true,
    status: "Ready for pickup"
  },
  {
    orderId: "#98SDSD",
    senderName: "Save Mart",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: true,
    status: "Delivered"
  },
  {
    orderId: "#89ESDD",
    senderName: "Alex Jhon",
    location: "Doloremque architecto at rerum non dignissimos ab atque",
    time: '01:44 am',
    isPicked: true,
    status: "Pending confirmation"
  },

]

const statusFiltersItems = [
  {
    label: "All",
    value: "All",
    background: "rgb(39 174 96 / 27%)",
    color: "#27AE60",
  },
  {
    label: "Un confirmed",
    value: "Un confirmed",
    background: "#d4d4d4",
    color: "rgb(100 100 100)",
  },
  {
    label: "Ready for Pickup",
    value: "Ready for pickup",
    background: "rgb(230 126 34 / 17%)",
    color: "rgb(230, 126, 34)",
  },
  {
    label: "Picked From Shop",
    value: "Picked from shop",
    background: "rgb(41 128 185 / 10%)",
    color: "rgb(41, 128, 185)",
  },
  {
    label: "Pending Confirmation",
    value: "Pending confirmation",
    background: "rgb(142 68 173 / 10%)",
    color: "rgb(142, 68, 173)",
  },
  {
    label: "Delivered",
    value: "Delivered",
    background: "rgb(39 174 96 / 27%)",
    color: "#27AE60",
  },
]

const OrdersRequests = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  console.log("selectedFilter", selectedFilter)

  return (
    <div className='orders-req-main bx-bg--white border-repel card-shadow'>
      <div className="common-head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <h3>Orders Requests</h3>
          <Button
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            style={{
              background: `${isFiltersVisible ? "#27ae6047" : "#e7e7e9"}`,
              color: '#000',
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: '10px',
              border: "none"
            }}
          ><img src={filterIcon} width={15} height={15} alt="" /><p>Filters</p></Button>
        </div>
      </div>
      {isFiltersVisible && <div className="order-filters">
        {
          statusFiltersItems.map((item) => (
            <Button
              key={item.label}
              type='primary'
              onClick={() => setSelectedFilter(item.value)}
              style={{
                background: `${selectedFilter === item.value ? item.color : item.background}`,
                color: `${selectedFilter === item.value ? "#fff" : item.color}`,
                border: "none",
                boxShadow: "0 !important"
              }}
            >
              {item.label}
            </Button>
          ))
        }

      </div>}
      <Row gutter={[20, 20]} style={{ marginTop: "20px" }}>
        {ordersRequestsData
          .filter((item) => {
            const lowerSelectedFilter = selectedFilter.toLowerCase();
            const lowerStatus = item.status.toLowerCase();
            console.log(`Filter: ${lowerSelectedFilter}, Status: ${lowerStatus}`);
            return lowerSelectedFilter === 'all' ? true : lowerStatus === lowerSelectedFilter;
          })
          .map((item: any) => (
            <Col lg={8} md={8} sm={24} xs={24} key={item.orderId}>
              <OrderCard orderData={item} />
            </Col>
          ))}

      </Row>
    </div>
  )
}

export default OrdersRequests