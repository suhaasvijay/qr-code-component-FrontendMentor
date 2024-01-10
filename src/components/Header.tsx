import toast, { Toaster } from 'react-hot-toast';

export default function Header() {

  const handleLogin = () => {
    toast.error("Under Development")
  }
  return (
    <div className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <h1 className='text-xl font-bold text-left py-5'>QR Code Generator</h1>
      <button onClick={handleLogin} className="text-md font-semibold bg-green-400 py-2 px-4 rounded-md text-white">Login</button>
      <Toaster
        position="bottom-right"
        reverseOrder={false} />
    </div>
  )
}
