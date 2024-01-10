import { useState } from 'react'
import QRCode from 'qrcode'
import { saveAs } from 'file-saver'

import '../App.css'

export default function Main() {

  const [qrcode, setQrcode] = useState('')
  const [input, setInput] = useState('')

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const generateQR = () => {
    QRCode.toDataURL(input)
      .then(url => {
        setQrcode(url)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const downloadImage = () => {
    saveAs(qrcode, 'image.jpg')
  }

  return (
    <div className='max-w-6xl mx-auto rounded-3xl flex justify-between items-center mt-32'>
      <div className=' flex flex-col justify-normal items-left gap-2 max-w-[400px]'>
        <h1 className='font-bold text-6xl'>
          Generate your QR code in a few clicks
        </h1>
        <div className='flex gap-5 mt-16'>
          <input type="text" placeholder='Please enter text' value={input} onChange={handleInputChange} className='text-black text-base w-[150%] font-semibold border-2 border-grey-300 p-2 rounded-md' />
          <button className='bg-green-500 text-white py-2 px-4 rounded-md' onClick={generateQR}>Generate</button>
        </div>
      </div>
      <div className='image p-10 rounded-2xl flex flex-col gap-10'>
        {qrcode ?
          <img src={qrcode} alt="Qrcode" width='200px' height='auto' className='rounded-2xl' />
          :
          <img src='/placeholder-qr.png' alt="Qrcode" width='200px' height='auto' className='rounded-2xl  blur-lg' />
        }
        {qrcode ?
          <button onClick={downloadImage} className='bg-green-500 text-white p-2 rounded-md'>Download</button>
          :
          <button disabled className='bg-green-900  text-white p-2 rounded-md'>Download</button>
        }
      </div>
    </div>
  )
}
