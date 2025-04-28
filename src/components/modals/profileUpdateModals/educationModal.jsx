import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const EducationModal = ({ open, onClose, education }) => {
    
  const [highestEducation, setHighestEducation] = useState(education[0].highestEducation || "Graduate");
  const [collegeName, setCollegeName] = useState(education[0].instituteName || "");
  const [degree, setDegree] = useState(education[0].degree || "");
  const [specialisation, setSpecialisation] = useState(education[0].specialisation || "");
  const [educationType, setEducationType] = useState(education[0].educationType || "Full-time");
  const [startDate, setStartDate]= useState(education[0].startDate);
  const [endDate, setEndDate]= useState(education[0].endDate);

  const handleSave = () => {

     
    const educationData = {
      highestEducation,
      institueName,
      degree,
      specialisation,
      educationType,
      startDate,
      endDate
    };
    console.log(educationData);
    onClose();
  };



  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle className="text-lg font-semibold">Edit education</DialogTitle>
      <DialogContent className="space-y-4">
        <div>
          <label className="block text-sm mb-1 font-medium">
            Your current or highest completed level of education
          </label>
          <ToggleButtonGroup
            value={highestEducation}
            exclusive
            onChange={(e, value) => value && setHighestEducation(value)}
            size="small"
          >
            {["Diploma", "ITI", "Graduate", "Post Graduate"].map((label) => (
              <ToggleButton key={label} value={label}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>

        <TextField
          label="College name"
          fullWidth
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel>Degree</InputLabel>
          <Select value={degree} onChange={(e) => setDegree(e.target.value)} label="Degree">
            <MenuItem value="B.A.">B.A.</MenuItem>
            <MenuItem value="B.Com">B.Com</MenuItem>
            <MenuItem value="B.sc">B.Sc</MenuItem>
            <MenuItem value="B.Tech">B.Tech</MenuItem>
            <MenuItem value="M.A.">M.A.</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Specialisation</InputLabel>
          <Select
            value={specialisation}
            onChange={(e) => setSpecialisation(e.target.value)}
            label="Specialisation"
          >
            <MenuItem value="Computer Science">Computer Science</MenuItem>
            <MenuItem value="Commerce">Commerce</MenuItem>
            <MenuItem value="Arts">Arts</MenuItem>
            <MenuItem value="Physics">Physics</MenuItem>
          </Select>
        </FormControl>

        <div>
          <label className="block text-sm mb-1 font-medium">Education type</label>
          <ToggleButtonGroup
            value={educationType}
            exclusive
            onChange={(e, value) => value && setEducationType(value)}
            size="small"
          >
            <ToggleButton value="Full-time">Full-time</ToggleButton>
            <ToggleButton value="Part-time">Part-time</ToggleButton>
            <ToggleButton value="Correspondence">Correspondence</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <FormControl fullWidth>
          
          <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e)=> setStartDate(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          />

        
        <TextField 
        label="End Date"
          type="date"
          value={endDate}
          onChange={(e)=> setEndDate(e.target.value)}
          slotProps={{inputLabel:{shrink: true}}}
          />
        </FormControl>


      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EducationModal;
