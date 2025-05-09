import React from "react";
import {
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const filterOptions = {
  datePosted: ["All", "Last 24 hours", "Last 3 days", "Last 7 days"],
  workMode: ["Work from Home", "Work from Office", "Work from Fields"],
  workType: ["Full time", "Part Time", "Internship"],
  workShift: ["Day Shift", "Night Shift"],
  department: [
    "Advertising / Communication",
    "Aviation & Aerospace",
    "Consulting",
    "Data Science & Analytics",
  ],
  sortBy: ["Relevant", "Salary - High to low", "Date posted - New to Old"],
  distance: ["All", "Within 5 km", "Within 10 km", "Within 20 km", "Within 50 km"],
};

const Sidebar = ({ filters, setFilters, salary, setSalary }) => {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card sx={{ padding: 2, width: "100%" }}>
      {Object.entries(filterOptions).map(([key, options]) => (
        <Accordion key={key} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" sx={{ textTransform: "capitalize" }}>
              {key.replace(/([A-Z])/g, " $1")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <RadioGroup
                value={filters[key] || ""}
                onChange={(e) => updateFilter(key, e.target.value)}
              >
                {options.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      ))}

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Salary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" gutterBottom>
            Up to ₹{salary}
          </Typography>
          <Slider
            value={salary}
            onChange={(e, value) => setSalary(value)}
            min={30000}
            max={150000}
            step={5000}
            valueLabelDisplay="auto"
          />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default Sidebar;
