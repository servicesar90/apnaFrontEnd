import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Chip, Box } from '@mui/material';
import { X } from 'lucide-react';

const furtherEducationOptions = ["Post Graduate Degree", "Certification / Courses", "Govt. Job Preparation"]

const EducationPreferenceModal = ({ open, onClose, educationPreference }) => {

    const [educationPreferences, setEducationPreference] = useState(educationPreference);

    const handleSave = () => {
        console.log({ educationPreferences });
    }
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <div className="flex justify-between items-center px-6 pt-4">
                <DialogTitle className="text-xl font-semibold text-gray-800">
                    Further education preferences
                </DialogTitle>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                    <X className="w-5 h-5" />
                </button>
            </div>

            <DialogContent className="px-6 pt-0 pb-4 space-y-6">
                {/* Info Card */}
                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 flex justify-between items-center">
                    <div>
                        <p className="font-medium text-purple-800">Planning to study further?</p>
                        <p className="text-sm text-purple-700">We'll help you find the best options!</p>
                    </div>
                    <div className="w-10 h-10 text-purple-500">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 4l16 8-16 8V4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Preference Options */}
                <div>
                    <p className="text-base font-medium text-gray-700 mb-2">
                        Interested in further education? Select your preferred options
                    </p>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1.5,
                        }}
                    >
                        {furtherEducationOptions.map((option, index) => (
                            <Chip
                                key={index}
                                label={option}
                                variant={educationPreferences === option ? "filled" : "outlined"}
                                onClick={() => setEducationPreference(option)}
                                color="primary"
                                sx={{ cursor: 'pointer' }}
                            />
                        ))}
                    </Box>
                </div>
            </DialogContent>

            <DialogActions className="px-6 pb-4">
                <Button onClick={onClose} variant="outlined" className="mr-2">
                    Not Interested
                </Button>
                <Button onClick={handleSave} variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EducationPreferenceModal;
