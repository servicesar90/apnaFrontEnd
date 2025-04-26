import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
} from "@mui/material";
import { X } from "lucide-react";

const employementType=['Part Time', 'Full Time', "Internships", "Contract"];
const workPlaces= ['Work from Office', 'Work from Home', "Field Jobs"];
const shifts= ["Night Shift", "Day Shift"]

const EditJobPreferencesModal = ({ open, onClose, preferredEmployementType, preferredShifts, preferredWorkplace }) => {
  const [employmentTypes, setEmploymentTypes] = useState(preferredEmployementType);
  const [workplacePrefs, setWorkplacePrefs] = useState(preferredWorkplace);
  const [shiftPrefs, setShiftPrefs]= useState(preferredShifts);

  const handleEmploymentChange = (type) => {
    setEmploymentTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type); // remove type
      } else {
        return [...prev, type]; // add type
      }
    });
  };


  const handleWorkplaceChange = (type) => {
    setWorkplacePrefs((prev) => {
        if (prev.includes(type)) {
          return prev.filter((t) => t !== type); // remove type
        } else {
          return [...prev, type]; // add type
        }
      });
  };

  const handleShiftChange = (type) => {
    setShiftPrefs((prev) => {
        if (prev.includes(type)) {
          return prev.filter((t) => t !== type); // remove type
        } else {
          return [...prev, type]; // add type
        }
      });
  };

  const handleSave=()=>{
    console.log({preferredEmployementType: employmentTypes, preferredShifts: shiftPrefs, preferredWorkplace: workplacePrefs})
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <div className="flex justify-between items-center px-4 pt-4">
        <DialogTitle className="text-xl font-semibold">Edit job preferences</DialogTitle>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          <X size={20} />
        </button>
      </div>

      <DialogContent className="space-y-6">
        <div>
          <Typography className="font-medium text-sm mb-2">Preferred employment type</Typography>
          <div className="space-y-2">
            {employementType.map((type, index)=>(
                <FormControlLabel
                control={
                  <Checkbox
                    checked={employmentTypes.includes(type)}
                    onClick={() => handleEmploymentChange(type)}
                  />
                }
                label={type}
                key={index}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            ))}
            
           
          </div>
        </div>

        <Divider />

        <div>
          <Typography className="font-medium text-sm mb-2">Preferred workplace</Typography>
          <div className="space-y-2">
          {workPlaces.map((type, index)=>(
                <FormControlLabel
                control={
                  <Checkbox
                    checked={workplacePrefs.includes(type)}
                    onClick={() => handleWorkplaceChange(type)}
                  />
                }
                label={type}
                key={index}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            ))}
            
          </div>
        </div>


        <Divider />

        <div>
          <Typography className="font-medium text-sm mb-2">Preferred Shifts</Typography>
          <div className="space-y-2">
          {shifts.map((type, index)=>(
                <FormControlLabel
                control={
                  <Checkbox
                    checked={shiftPrefs.includes(type)}
                    onClick={() => handleShiftChange(type)}
                  />
                }
                label={type}
                key={index}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            ))}
            
          </div>
        </div>
      </DialogContent>

      <DialogActions className="px-6 pb-4">
        <Button
          variant="contained"
          className="bg-green-300 text-white w-full py-2 rounded-md shadow-none normal-case"
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditJobPreferencesModal;