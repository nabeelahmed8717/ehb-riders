import React from 'react'
import "./sqPackages.scss"
import { Button, Card, Col, Row } from 'antd'

import franchisePacIcon from "../../assets/icons/franchise-p.png"

const packagesData = [
    {
        title: 'BASIC',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
    {
        title: 'STANDARD',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
            "Eligible for product verification",
            "Eligible for product verification",
        ]
    },
    {
        title: 'HIGH',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
    {
        title: 'PREMIUM',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
]


const subFranchisePackages = [
    {
        key: '1',
        label: 'Level 1',
        shopRegLimit: '50',
        orderslimit: '5,000',
        price: '1,000',
        isAlreadyPurchased: false,
    },
    {
        key: '2',
        label: 'Level 2',
        shopRegLimit: '80',
        orderslimit: '8,000',
        price: '2,000',
        isAlreadyPurchased: false,
    },
    {
        key: '3',
        label: 'Level 3',
        shopRegLimit: '110',
        orderslimit: '11,000',
        price: '3,000',
        isAlreadyPurchased: true,
    },
    {
        key: '4',
        label: 'Level 4',
        shopRegLimit: '150',
        orderslimit: '15,000',
        price: '4,000',
        isAlreadyPurchased: false,
    },
    {
        key: '5',
        label: 'Level 5',
        shopRegLimit: '200',
        orderslimit: '20,000',
        price: '5,000',
        isAlreadyPurchased: true,
    },
    {
        key: '6',
        label: 'Level 6',
        shopRegLimit: '250',
        orderslimit: '25,000',
        price: '6,000',
        isAlreadyPurchased: false,
    },
    {
        key: '7',
        label: 'Level 7',
        shopRegLimit: '300',
        orderslimit: '30,000',
        price: '7,000',
        isAlreadyPurchased: false,
    },
    {
        key: '8',
        label: 'Level 8',
        shopRegLimit: '350',
        orderslimit: '30,000',
        price: '8,000',
        isAlreadyPurchased: false,
    },
    {
        key: '9',
        label: 'Level 9',
        shopRegLimit: '400',
        orderslimit: '40,000',
        price: '9,000',
        isAlreadyPurchased: false,
    },
    {
        key: '10',
        label: 'Level 10',
        shopRegLimit: '450',
        orderslimit: '45,000',
        price: '10,000',
        isAlreadyPurchased: false,
    },
]

const SqPackages = () => {
    return (
        <div className='packages-main-wrapper wrapper-orders-main bx-bg--white border-repel card-shadow pending-wrapper'>
            <div className="common-head-wrapper-title">
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h3>Franchise Packages</h3>
                    <p>(Round 1 - Phase 1)</p>
                </div>
            </div>

            <div className="wrapper-packages-inner">
                <Row gutter={[20, 20]}>
                    {
                        subFranchisePackages.map((item: any) => (
                            <Col lg={6} md={8} sm={24} xs={24}>
                                <div className="wrapper-package-bbx">
                                    <div className="icon-wrapper">
                                        <img src={franchisePacIcon} width={20} height={20} alt="" />
                                    </div>
                                    <h3>{item.label}</h3>
                                    <p>Registered Shops <span>{item.shopRegLimit}</span></p>
                                    <p>Daily order limit <span>{item.orderslimit}</span></p>
                                    <h4>$ {item.price}</h4>
                                    {
                                        item.isAlreadyPurchased === true ?
                                            <Button className='purchase-btn already-purchase-btn' disabled={true}>Already Purchased</Button>
                                            :
                                            <Button className='purchase-btn'>Purchase Now</Button>
                                    }
                                </div>
                            </Col>
                        ))
                    }

                </Row>
            </div>
        </div>
    )
}

export default SqPackages