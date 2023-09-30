import React from 'react'
import "./trusteeProfile.scss"
import verifiedIcon from "../../assets/icons/verified.svg"
import CommonNote from '../../shared/commonNote/commonNote'
import { Button } from 'antd'
import ActionModal from '../../shared/actionModal/actionModal'

const TrusteeProfile = () => {
  return (
    <>
    <div className='trustee-profile-main bx-bg--white border-repel card-shadow pending-wrapper'>
      <div className="common-head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <h3>Trustee profile </h3>
        </div>
      </div>
      <br />
      <br />
      <CommonNote content='You must hold <strong>Rs.10,000</strong> in your trustee wallet in order to access rider functionalities.'/>
      <br />
      <div className="card-trustee-wallet">
        <div className='tw-profile'>Robet Jhones <img src={verifiedIcon} width={20} height={20} alt="" /></div>
        <p>Trustee Wallet</p>
        <h2>Rs. <span>10,000</span></h2>
        <br />
        <div style={{display:"flex", gap:'10px'}}>
        <Button className='with-drawl-btn'>Withdraw</Button>
        <Button>Deposit</Button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default TrusteeProfile