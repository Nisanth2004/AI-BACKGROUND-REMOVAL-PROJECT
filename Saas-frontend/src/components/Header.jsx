
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left side : video banner */}
        <div className="order-2 md:order-1 flex justify-center">
            <div className='shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden'>
            <video src={assets.video_banner} autoPlay loop muted className="w-full max-w-[400px] h-auto object-cover"></video>
            </div>
        </div>



         {/* Right side : Text Content */}

         <div className="order-1 md:order-2">
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-light'>
                The fastest <span  className='text-indigo-700'>background eraser.</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                 Remove.bg is an AI-based tool that removes backgrounds from images in just seconds.
It’s fast, accurate, and perfect for creating transparent images without manual editing.
Commonly used in e-commerce, design, and personal projects to enhance visuals effortlessly.
            </p>


            <div>
                <input type="file" accept='image/*' name="" id="upload1" hidden />
                <label htmlFor="upload1" className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105 text-lg">
                    Upload your Image 
                </label>
            </div>
         </div>
    </div>

  )
}

export default Header
