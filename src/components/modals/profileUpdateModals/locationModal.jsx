import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Chip,
  Box,
  Typography
} from "@mui/material";
import { X, MapPin } from "lucide-react";

const EditLocationModal = ({ open, onClose, location }) => {
  const [preferredCities, setPreferredCities] = useState(location.preferredJobCity);
  const [cityInput, setCityInput] = useState("");
  const [currentLocation, setCurrentLocation] = useState(location.currentLocation);
  const [hometown, setHometown] = useState(location.hometown);

  const handleAddCity = () => {
    if (cityInput && preferredCities.length < 3 && !preferredCities.includes(cityInput)) {
      setPreferredCities([...preferredCities, cityInput]);
      setCityInput("");
    }
  };

  const handleRemoveCity = (city) => {
    setPreferredCities(preferredCities.filter((c) => c !== city));
  };

  const handleSave=()=>{
    console.log({preferredJobCity: preferredCities, hometown, currentLocation })
  }
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle className="flex items-center justify-between border-b">
        <span className="text-xl font-semibold">Edit Location</span>
        <IconButton onClick={onClose}>
          <X className="w-5 h-5" />
        </IconButton>
      </DialogTitle>

      <DialogContent className="space-y-4">
        <div>
          <Typography variant="subtitle1" className="font-semibold">
            Preferred job city
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Jobs are shown based on your preferred city
          </Typography>

          <Box className="mt-2 flex items-center gap-2">
            <TextField
              variant="outlined"
              placeholder="Add up to 3 cities"
              size="small"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              className="flex-grow"
            />
            <Button variant="outlined" onClick={handleAddCity}>
              Add
            </Button>
          </Box>

          <Typography className="mt-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
            ✨ Add more preferred job cities to increase your chances of getting a job
          </Typography>

          <Box className="mt-2 flex flex-wrap gap-2">
            {preferredCities.map((city) => (
              <Chip
                key={city}
                label={city}
                onDelete={() => handleRemoveCity(city)}
                className="bg-green-100 text-green-800"
              />
            ))}
          </Box>
        </div>

        <div>
          <Typography variant="subtitle1" className="font-semibold flex items-center gap-2">
            Current location <MapPin className="w-4 h-4 text-green-600" />
          </Typography>
          <TextField
            fullWidth
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            variant="outlined"
            size="small"
            className="mt-2"
          />
        </div>

        <div>
          <Typography variant="subtitle1" className="font-semibold">
            Hometown
          </Typography>
          <TextField
            fullWidth
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
            variant="outlined"
            size="small"
            className="mt-2"
          />
        </div>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSave}
          className="!mt-4 !bg-green-300 text-white hover:!bg-green-400"
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditLocationModal;
