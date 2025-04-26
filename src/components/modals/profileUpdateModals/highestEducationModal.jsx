import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { X } from "lucide-react";

const educationOptions = ["Diploma", "ITI", "Graduate", "Post Graduate"];

export default function EditEducationModal({ open, onClose, education }) {
  const [highestEducation, setHighestEducation] = useState(education);

  const handleSave=()=>{
    console.log({highestEducation})
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent className="relative p-6 rounded-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-6 text-center">
          Edit highest education
        </h2>

        {/* Label */}
        <p className="text-center text-sm text-gray-700 mb-4">
          Your current or highest completed level of education
        </p>

        {/* Options */}
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          {educationOptions.map((option) => (
            <button
              key={option}
              onClick={() => setHighestEducation(option)}
              className={`px-4 py-1.5 rounded-full border text-sm transition-all
                ${
                  highestEducation === option
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300"
        >
          Save
        </button>
      </DialogContent>
    </Dialog>
  );
}
