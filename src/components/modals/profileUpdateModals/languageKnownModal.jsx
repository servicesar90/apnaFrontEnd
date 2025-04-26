import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from "@mui/material";

const languagesList = ["Hindi", "Telugu", "Bengali"];

const LanguageModal = ({ open, onClose, language = [], englishLevel = "" }) => {
  const [languagesKnown, setLanguagesKnown] = useState(language);
  const [selectedEnglishLevel, setSelectedEnglishLevel] = useState(englishLevel);

  const handleLanguageToggle = (lang) => {
    if (languagesKnown.includes(lang)) {
      setLanguagesKnown((prev) => prev.filter((l) => l !== lang));
    } else {
      setLanguagesKnown((prev) => [...prev, lang]);
    }
  };

  const handleLevelChange = (level) => {
    setSelectedEnglishLevel(level);
  };

  const handleSave = () => {
    console.log({
      englishLevel: selectedEnglishLevel,
      language: languagesKnown
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle className="text-lg font-semibold">Edit Language</DialogTitle>
      <DialogContent>
        <div className="mt-2 ml-4">
          <FormLabel component="legend" className="mb-1 text-sm text-gray-600">
            English Proficiency
          </FormLabel>
          <RadioGroup
            value={selectedEnglishLevel}
            onChange={(e) => handleLevelChange(e.target.value)}
          >
            <FormControlLabel value="Basic" control={<Radio />} label="Basic" />
            <FormControlLabel value="Intermediate" control={<Radio />} label="Intermediate" />
            <FormControlLabel value="Advanced" control={<Radio />} label="Advanced" />
          </RadioGroup>
        </div>

        <div className="mt-4 ml-4">
          <FormLabel component="legend" className="mb-1 text-sm text-gray-600">
            Other Languages Known
          </FormLabel>
          {languagesList.map((lang, index) => {
            const isSelected = languagesKnown.includes(lang);
            return (
              <div
                key={index}
                className={`border rounded-md p-4 mb-3 transition-all ${
                  isSelected ? "border-green-500" : "border-gray-300"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang}</span>
                  <Checkbox
                    checked={isSelected}
                    onChange={() => handleLanguageToggle(lang)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LanguageModal;
