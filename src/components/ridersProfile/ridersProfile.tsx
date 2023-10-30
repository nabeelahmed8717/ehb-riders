import React from 'react'
import './ridersProfile.scss'
import { Col, Form, Input, Row, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import MainProfile from './profiles/mainProfile';
import Verifications from './profiles/verifications';
import DeliveryMilestone from './profiles/deliveryMilestone';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <div style={{display:"flex", alignItems:"center", gap:"10px"}}>Main Profile <div className='op-badge badge-pss'>PSS</div></div>,
    children: <MainProfile/>,
  },
  {
    key: '2',
    label: <div style={{display:"flex", alignItems:"center", gap:"10px"}}>Verifications<div className='op-badge badge-edr'>EDR</div></div>,
    children: <Verifications/>,
  },
  {
    key: '3',
    label: 'Delivery Milestones',
    children: <DeliveryMilestone/>,
  },
];

const RidersProfile = () => {
    

    return (
        <div className='orders-req-main bx-bg--white border-repel card-shadow'>
            <div className="common-head-wrapper-title">
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h3>Rider's Profile</h3>
                </div>
            </div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            
        </div>
    )
}

export default RidersProfile