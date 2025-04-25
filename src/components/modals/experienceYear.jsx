import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const EditExperienceYearModal = ({ isOpen, onClose, years, months }) => {

  const [year, setYears]= useState(years);
  const [month, setMonths]= useState(months);  
  let experienceObject= {years: year, months: month};

  const handleSave=()=>{
    experienceObject={years: year, months: month};
    console.log(experienceObject);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-6 text-center">Edit total years of experience</h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Total years of experience</label>
          <div className="flex gap-4 items-center">
            <input
              type="number"
              min="0"
              value={year}
              onChange={(e) => setYears(e.target.value)}
              className="w-20 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="0"
            />
            <span>Years</span>
            <input
              type="number"
              min="0"
              value={month}
              onChange={(e) => setMonths(e.target.value)}
              className="w-20 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="0"
            />
            <span>Months (Optional)</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleSave}
            className="bg-green-300 hover:bg-green-400 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExperienceYearModal;
