import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@mui/material';
import { X } from 'lucide-react';


const suggestedTags = [
  'Software Backend Development',
  'Website Development',
  'DevOps',
  'UI / UX Design'
];

const EditPreferredTitleModal = ({ open, onClose, preferredJobs }) => {
  const [selectedTags, setSelectedTags] = useState(preferredJobs);
  const [searchInput, setSearchInput] = useState('');

  const handleRemove = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const handleAdd = (tag) => {
    if (!selectedTags.includes(tag) && selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSave=()=>{
    
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <DialogTitle className="text-xl font-semibold">Edit preferred title/role</DialogTitle>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <DialogContent className="space-y-4">
          <div className="bg-yellow-50 text-yellow-800 rounded-md p-3 flex items-center gap-2 text-sm">
            <span>🌞</span>
            <span>Our job recommendations are based on your profile</span>
          </div>

          <div>
            <p className="font-medium text-gray-800">Please select job roles that better match your interest and background</p>
            <p className="text-sm text-gray-500">You can select up to 5 title/role</p>
          </div>

          <TextField
            fullWidth
            placeholder="Search by job title/role"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            variant="outlined"
            size="small"
          />

          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <div
                key={tag}
                className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
                <X
                  size={16}
                  className="ml-2 cursor-pointer"
                  onClick={() => handleRemove(tag)}
                />
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600 mb-2">Suggested job title/role</p>
            <div className="flex flex-wrap gap-2">
              {suggestedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleAdd(tag)}
                  className="bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-100"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleSave}
            variant="contained"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Save
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default EditPreferredTitleModal;