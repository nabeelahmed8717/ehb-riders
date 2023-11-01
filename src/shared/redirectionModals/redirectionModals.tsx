import React from 'react'
import "./redirectionModals.scss"
import { Button, Modal } from 'antd'

const RedirectionModals = ({ title, message, confirmationMsg, icon, iconTitle, iconDisp, modalOpen, setIsModalOpen, submitHandler, navigation }: any) => {
    return (
        <Modal title={title} open={modalOpen} footer={false} onOk={submitHandler} onCancel={() => setIsModalOpen(false)}>

            <div style={{marginBottom:"20px"}}>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"10px",
                    marginBottom:"10px"
                }}>
                    <img src={icon} width={50} height={50} alt="" />
                    <div>
                        <h4 style={{fontSize:"14px", color:"#000"}}>{iconTitle}</h4>
                        <p style={{fontSize:"12px", color:"#8b8b8b"}}>{iconDisp}</p>
                    </div>
                </div>
                <h4>{message}</h4>
                <p>{confirmationMsg}</p>
            </div>

            <div style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
            }}>
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <a href={navigation} target="_blank" rel="noopener noreferrer">
                    <Button type='primary' onClick={() => setIsModalOpen(false)}>Yes, Navigate</Button>
                </a>
            </div>
        </Modal>
    )
}

export default RedirectionModals