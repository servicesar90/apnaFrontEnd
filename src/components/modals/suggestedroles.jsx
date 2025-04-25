import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { Dialog } from '@mui/material';

const suggestedJobRoles = [
  "UI / UX Design",
  "DevOps",
  "Software Development",
  "Website Development",
  "Software Project Management",
  "Frontend Development",
  "Software Backend Development",
  "Mobile App Development",
  "QA Testing",
  "Data Engineering"
];

const EditJobRolesModal = ({ open, onClose, roles, setRoles }) => {
  const [jobRoles, setJobRolesLocal] = useState(roles || []);
  const [input, setInput] = useState('');


  const filteredSuggestions = suggestedJobRoles.filter(
    (role) => role.toLowerCase().includes(input.toLowerCase()) && !jobRoles.includes(role)
  );

  const toggleRole = (role) => {
    if (jobRoles.includes(role)) {
      setJobRolesLocal(jobRoles.filter((r) => r !== role));
    } else {
      setJobRolesLocal([...jobRoles, role]);
    }
  };

  const handleSave = () => {
    setRoles("jobRoles", jobRoles);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
 
      <div className="bg-white w-full max-w-2xl p-6 rounded-xl relative shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Job Roles</h2>
          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-black" />
          </button>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">What job roles are you looking for?</label>
          <p className="text-sm text-gray-500 mb-2">Choose job roles relevant to your experience</p>

          <div className="relative mb-3">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search Job Roles"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {jobRoles.map((role, idx) => (
              <span key={idx} className="flex items-center bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                {role}
                <button onClick={() => toggleRole(role)} className="ml-2 text-green-700 hover:text-green-900">
                  <X size={16} />
                </button>
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {filteredSuggestions.map((role, idx) => (
              <button
                key={idx}
                onClick={() => toggleRole(role)}
                className="text-left px-3 py-2 rounded bg-gray-100 hover:bg-blue-100 text-sm"
              >
                {role}
              </button>
            ))}
          </div>

          <div className="flex justify-end mt-4 gap-2">
            <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded">Cancel</button>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </div>
      </div>
   
    </Dialog>
   
  );
};

export default EditJobRolesModal;
