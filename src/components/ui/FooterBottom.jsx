import {
    Facebook,
    Linkedin,
    Twitter,
    Instagram,
    Youtube,
  } from "lucide-react";
  
  export default function FooterBottom() {
    return (
      <div className="bg-[#666666] text-white px-4 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3">
            <img src="/LOGO.png" alt="Apna Logo" className="w-14 h-14 rounded-[16px]" />
            <div>
              <p className="font-semibold text-lg">Follow us on social media</p>
              <div className="flex items-center gap-4 mt-2">
                <Facebook size={20} />
                <Linkedin size={20} />
                <Twitter size={20} />
                <Instagram size={20} />
                <Youtube size={20} />
              </div>
            </div>
          </div>
  
          <hr className="border-t border-gray-600 w-full" />
  
          <div className="text-sm flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
            <span>© 2025 Talentnst | All rights reserved</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="bg-white text-[#666666] rounded-2xl p-6 w-full max-w-sm flex items-center justify-between shadow">
          <div>
            <h4 className="font-semibold text-lg">Apply on the go</h4>
            <p className="text-sm mt-1">Get real time job updates on our App</p>
            <img src="" alt="Get it on Google Play" className="mt-2 w-32" />
          </div>
          <img src="" alt="QR Code" className="w-20 h-20" />
        </div>
      </div>
    );
  }