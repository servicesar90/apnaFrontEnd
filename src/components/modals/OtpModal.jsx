import { useEffect, useRef, useState } from "react";
import { X, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { employeeData } from "../../employeeData";


export default function OtpModal({ isOpen, onClose, mobile, loginClose }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const [showPresentOtp, setShowPrsentOtp]= useState(true);

  const navigate= useNavigate()


  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    

    else if (index == otp.length-1){
      const employeePresent= employeeData.filter((data)=>data.number===mobile);
      localStorage.setItem("id", mobile);
      if(employeePresent.length>0){

        navigate("/jobs")
      }else{
        
        navigate("/profile");

      }
      setShowPrsentOtp(false);
      loginClose()
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

 

  if(!isOpen || !showPresentOtp) return null;


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[380px] shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold text-[#666666] mb-1">Enter OTP</h2>
        <p className="text-sm text-[#666666] mb-4">
          We have sent an OTP on : <span className="font-medium">{mobile}</span>{" "}
          {/* <button className="inline-flex ml-1 text-[#3C78D8]">
            <Pencil size={14} />
          </button> */}
        </p>

        <div className="flex justify-between gap-2 mb-4">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              value={digit}
              ref={(el) => (inputsRef.current[idx] = el)}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              maxLength={1}
              className="w-12 h-12 border border-[#3C78D8] rounded-md text-center text-xl focus:outline-none text-[#666666]"
            />
          ))}
        </div>

        <div className="text-sm text-gray-500 text-center mb-2">00:30</div>
        <div className="text-center text-sm">
          Didn’t get the OTP?{" "}
          <button className="text-[#3C78D8] font-medium hover:underline">Resend</button>
        </div>
      </div>
    </div>
  );
}