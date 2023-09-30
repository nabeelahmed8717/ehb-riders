import React from 'react'
import "./commonNote.scss"

import infoIcon from "../../assets/icons/info.svg"

const CommonNote = ({content}:any) => {
  return (
    <div className='common-note-main-wrapper'>
        <img src={infoIcon} width={20} height={20} alt="" />
        <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default CommonNote