import React, { useState } from 'react'
import QRCode from 'react-qr-code'
function QrCodeGen() {
    const [qrCode, setQrCode] = useState('')

    const [input, setInput] = useState('')
    function handleGenerateQrCode() {
        setQrCode(input)
        setInput('')

    }
    return (
        <>
            <div className='main-heading'><h2>Qr-Code-Generator</h2></div>
            <div
                className='input-btn'
            >
                <input

                    type='text'
                    name='qr-code'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}

                />
                <button onClick={handleGenerateQrCode}
                    disabled={input && input.trim() !== '' ? false : true}
                >Generate</button>


            </div>

            <QRCode id='qr-code-value' value={qrCode} size={400} bgColor="#fff" />

        </>

    )
}

export default QrCodeGen