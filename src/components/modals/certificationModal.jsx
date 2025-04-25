import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { X } from "lucide-react";
import { TextField } from "@mui/material";

export default function EditCertificationModal({ open, onClose, certificate }) {
    const [certification, setCertification]= useState(certificate);

    const handleSave=()=>{
        console.log({certification});
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
          Add Certification
        </h2>

        {/* Input Field */}
        <label className="block text-sm font-medium mb-1">Certification Namery</label>
        <TextField
          fullWidth
          variant="outlined"
          onChange={(e)=> setCertification(e.target.value)}
          value={certification}
          slotProps={{ style: { backgroundColor: "#fff" } }}
        />


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
