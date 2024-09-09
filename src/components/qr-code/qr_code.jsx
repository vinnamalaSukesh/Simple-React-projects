import React, { useState } from 'react'
import {QRCode}  from 'react-qr-code'
import './qr.css'
const Qr_code = () => {
    const [code,setCode] = useState('')
  return (
    <div>
        <input type='text' value={code} onChange={(e)=>setCode(e.target.value)}/>
        <QRCode value={code}/>
    </div>
  )
}

export default Qr_code