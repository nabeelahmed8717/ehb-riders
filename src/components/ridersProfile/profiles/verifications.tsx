import { Col, Row } from 'antd'
import React from 'react'
import vehicleVer from "../../../assets/images/vehicle.png"

const Verifications = () => {
  return (
    <div className="main-ver-card">
        <Row>
            <Col xs={24} sm={24} md={8} lg={6}>
               <div className="card-bx-ver">
                <img src={vehicleVer} width={40} height={40} alt="" />
                <div>
                    <h4>Vehicle Verification</h4>
                    <div className="status">
                        <h4>Status</h4>
                        <div className='badge-common badge-placed'>Not Applied</div>
                    </div>
                </div>
               </div>
            </Col>
        </Row>
    </div>
  )
}

export default Verifications