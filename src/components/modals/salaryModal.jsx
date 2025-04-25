import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { X } from "lucide-react";
import { TextField } from "@mui/material";

export default function EditSalaryModal({ open, onClose, salary }) {
    const [currentSalary, setCurrentSalary]= useState(salary);

    const handleSave=()=>{
        console.log({currentSalary});
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
        <h2 className="text-xl font-semibold mb-4 text-center">
          Edit current monthly salary
        </h2>

        {/* Input Field */}
        <label className="block text-sm font-medium mb-1">Current monthly salary</label>
        <TextField
          fullWidth
          variant="outlined"
          onChange={(e)=> setCurrentSalary(e.target.value)}
          value={currentSalary}
          slotProps={{ style: { backgroundColor: "#fff" } }}
        />

        {/* Info Text */}
        <div className="mt-3 text-sm text-blue-600 bg-blue-50 border border-blue-200 p-2 rounded-md">
          <span className="text-xs">
            💡 Salary information is private, we use it only to show relevant jobs
          </span>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full mt-6 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300"
        >
          Save
        </button>
      </DialogContent>
    </Dialog>
  );
}
