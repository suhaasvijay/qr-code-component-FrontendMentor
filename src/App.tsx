import './App.css'
import QRCode from 'qrcode'

var canvas = document.getElementById('canvas')

const generateQR = async (text: any) => {
  try {
    console.log(await QRCode.toDataURL(text))
  } catch (err) {
    console.error(err)
  }
}

function App() {

  return (
    <>
      <div className='bg-white p-5 rounded-3xl flex flex-col items-center'>
        <canvas id='canvas' className='p-4 bg-black mb-4 rounded-3xl'></canvas>
        <img src='/image-qr-code.png' alt='qr-code' className='rounded-3xl' width={300} height={300} />
        <div className='max-w-[300px] flex flex-wrap'>
          <h4 className='text-black text-2xl font-bold pt-[40px] '>
            Improve your front-end skills by building projects
          </h4>
          <p className='text-black text-lg pt-3 pb-[40px] '>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </>
  )
}

export default App
