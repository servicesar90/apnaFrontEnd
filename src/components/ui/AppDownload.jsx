import { Star, Download } from "lucide-react";

export default function AppDownload() {
  return (
    <div className="bg-[#F5F5F5] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3C78D8]">
          Download Apna app!
        </h2>
        <p className="text-md text-[#666666] font-medium">
          Unlimited job applications | HRs contact you directly | Track your Applications
        </p>

        <div className="bg-white p-4 rounded-xl w-fit shadow-md flex items-center gap-4">
          <img
            src="" // replace with actual QR image path
            alt="QR Code"
            className="w-24 h-24"
          />
          <p className="text-sm font-semibold text-[#666666] max-w-[120px]">
            Scan QR to download Apna app
          </p>
        </div>
      </div>

      {/* Phone Image */}
      <div className="flex justify-center flex-1">
        <img
          src="" // replace with phone mockup image
          alt="App Preview"
          className="w-60 md:w-80"
        />
      </div>

      {/* Stats */}
      <div className="flex flex-col items-start gap-6">
        <div className="bg-white rounded-xl px-6 py-4 shadow-md text-[#3C78D8] text-left">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Star className="text-yellow-500 w-5 h-5" /> 4.4
          </div>
          <p className="text-sm text-[#666666]">5L reviews</p>
        </div>
        <div className="bg-white rounded-xl px-6 py-4 shadow-md text-[#3C78D8] text-left">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Download className="w-5 h-5" /> 1 cr+
          </div>
          <p className="text-sm text-[#666666]">App downloads</p>
        </div>
      </div>
    </div>
  );
}