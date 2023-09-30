import React, { useState } from 'react'
import "./orderCard.scss"
import markerIcon from "../../../assets/icons/marker-green.svg";
import viewIcon from "../../../assets/icons/fi-eye.svg";
import directionIcon from "../../../assets/icons/direction-green.svg";
import { Button, Col, Image, Modal, Row } from 'antd';

const OrderCard = ({ orderData }: any) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const [isViewOrderModal, setIsViewOrderModal] = useState(false)

    const handleConfirmClick = () => {
        setIsLoading(true);

        // Simulate a 2-second delay for the loader
        setTimeout(() => {
            setIsLoading(false);
            setIsConfirmed(true);
        }, 3000);
    };

    return (
        <>
            <div className='order-card-main'
                style={{ border: `${orderData.status === "Ready for pickup" ? "2px solid #e67e22" : orderData.status === "Picked from shop" ? "2px solid #2980b9" : "2px solid transparent"}` }}>

                <div className="inset-card-overlap">
                    <div className='order-id-span'>
                        <h2>{orderData.orderId}</h2>
                        <span>01:33 am</span>
                    </div>
                    <div className="sender">
                        <p>Sender : <span>{orderData.senderName}</span></p>
                    </div>
                    <div className="location">
                        <img src={markerIcon} alt="" />
                        <p>{orderData.location}</p>
                    </div>
                    <div className="actions">
                        <div className='act-inset'>

                            {orderData.status === 'Pending confirmation' ? (
                                <Button
                                    type="primary"
                                    style={{ background: '#f39c12', color: "#fff", border: 'none' }}
                                    onClick={handleConfirmClick}
                                    disabled={isLoading || isConfirmed}
                                    loading={isLoading}
                                >
                                    {isLoading ? 'Waiting for Receiver Confirmation...' : isConfirmed ? 'Delivered' : 'Click to Confirm'}
                                </Button>
                            ) : orderData.isPicked === true ? (
                                <Button type="primary" style={{ background: '#8080802b', color: '#000', border: 'none' }} disabled>
                                    Picked
                                </Button>
                            ) : (
                                <Button type="primary">Pick order</Button>
                            )}
                            {!isLoading &&
                                <Button type="primary" className='direction-btn' onClick={() => setIsViewOrderModal(true)} >
                                    <img src={viewIcon} width={20} height={20} alt="" />
                                </Button>}
                            {!isLoading && <Button className="direction-btn"><img src={directionIcon} width={20} height={20} alt="" /></Button>}

                        </div>
                        {/* <div className="status">
                    Picked
                </div> */}
                    </div>
                    <div className="status-order">
                        {
                            orderData.status === "Picked from shop" ?
                                <p style={{ color: "#2980b9", fontWeight: "600" }}> <em>{orderData.status}</em></p>
                                :
                                orderData.status === "Ready for pickup" ?
                                    <p style={{ color: "#e67e22", fontWeight: "600" }}><em>{orderData.status}</em></p>
                                    :
                                    orderData.status === "Pending confirmation" ?
                                        <p style={{ color: "#8e44ad", fontWeight: "600" }}><em>{orderData.status}</em></p>
                                        :
                                        orderData.status === "Delivered" ?
                                            <p style={{ color: "#27ae60", fontWeight: "600" }}><em>{orderData.status}</em></p>
                                            :
                                            <p style={{ color: '#bababa' }}>No Status yet</p>
                        }

                    </div>
                </div>
            </div>

            <Modal title="View Order Request" rootClassName='view-request-modal' open={isViewOrderModal} footer={false} onCancel={() => setIsViewOrderModal(false)}>
                <br />
                <div className="inset-card-overlap">
                    <div className='order-id-span'>
                        <h2>Order ID : {orderData.orderId}</h2>
                        <span>01:33 am</span>
                    </div>
                    <div className="sender">
                        <p>Sender : <span>{orderData.senderName}</span></p>
                    </div>
                    <div className="location">
                        <img src={markerIcon} alt="" />
                        <p>{orderData.location}</p>
                    </div>

                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                    <div className="package-details">
                        <h4>Package/Order Details</h4>
                        <div className="package-info-main">
                            <Image src="https://ae01.alicdn.com/kf/S32854cf5b3704fc39e36d7d2daab187aG/Headphones-Bluetooth-Noise-Reduction-WH-1000XM5-Headworn-Wireless-Earphones-Dual-Bass-with-Mic.jpg" style={{ borderRadius: "10px" }} width={100} alt="" />
                            <div className="gripper-package-info">
                                <div className='row-it-p-s'>
                                    <p>Customized Wh-1000xm5 Wireless Headphones Noise Canceling</p>
                                </div>
                                <div className='row-it-p'>
                                    <p>Package Size :</p><span>7.1 x 6.7 x 3.2 inches</span>
                                </div>
                                <div className='row-it-p'>
                                    <p>Package Weight :</p><span>235 grams</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="actions">
                        <div className='act-inset'>

                            {orderData.status === 'Pending confirmation' ? (
                                <Button
                                    type="primary"
                                    style={{ background: '#f39c12', color: "#fff", border: 'none' }}
                                    onClick={handleConfirmClick}
                                    disabled={isLoading || isConfirmed}
                                    loading={isLoading}
                                >
                                    {isLoading ? 'Waiting for Receiver Confirmation...' : isConfirmed ? 'Delivered' : 'Click to Confirm'}
                                </Button>
                            ) : orderData.isPicked === true ? (
                                <Button type="primary" style={{ background: '#8080802b', color: '#000', border: 'none' }} disabled>
                                    Picked
                                </Button>
                            ) : (
                                <Button type="primary">Pick order</Button>
                            )}
                            {!isLoading && <Button className="direction-btn"><img src={directionIcon} width={20} height={20} alt="" /></Button>}

                        </div>
                        {/* <div className="status">
                    Picked
                </div> */}
                    </div>
                    <div className="status-order">
                        {
                            orderData.status === "Picked from shop" ?
                                <p style={{ color: "#2980b9", fontWeight: "600" }}> <em>{orderData.status}</em></p>
                                :
                                orderData.status === "Ready for pickup" ?
                                    <p style={{ color: "#e67e22", fontWeight: "600" }}><em>{orderData.status}</em></p>
                                    :
                                    orderData.status === "Pending confirmation" ?
                                        <p style={{ color: "#8e44ad", fontWeight: "600" }}><em>{orderData.status}</em></p>
                                        :
                                        orderData.status === "Delivered" ?
                                            <p style={{ color: "#27ae60", fontWeight: "600" }}><em>{orderData.status}</em></p>
                                            :
                                            <p style={{ color: '#bababa' }}>No Status yet</p>
                        }

                    </div>
                </div>
            </Modal>

        </>
    )
}

export default OrderCard