import { useState } from 'react';
import './style.css'
import QRCode from 'react-qr-code'

function QRCodeGenerator() {
    const [qrCode,setQrCode] = useState('');
    const [value, setValue] = useState('')

    function handleClick(){
        setQrCode(value)
        setValue('')
    }

    return <div style={{ textAlign: "center" }}>
        <h1>QR Code Generator</h1>
        <div>
            <input type="text " name='qr-code' placeholder='Enter your value here' 
            onChange={e=>setValue(e.target.value)} value={value}
            />
            <button onClick={handleClick} > Generate</button>
        </div>
        <div style={{ background: 'white', padding: '16px' }}>
            <QRCode id='qr-code' size={400} value={qrCode}/>
        </div>
    </div>
}

export default QRCodeGenerator;