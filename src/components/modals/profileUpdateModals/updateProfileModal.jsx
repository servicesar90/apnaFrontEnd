import React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Chip,
  Input,
  Box,
} from "@mui/material";

const DynamicModal = ({ open, onClose, fields, label, type, suggestions, metaData }) => {
  const { register, handleSubmit, setValue, watch, setError, formState: { errors } } = useForm({
    defaultValues: fields,
  });
  // console.log(`type ${JSON.stringify(fields)}`)


  const onSubmit = async (data) => {

    if (data.startDate) {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // remove time part

      let hasError = false;

      if (start > today) {
        setError("startDate", {
          type: "manual",
          message: "Start date must be in the past",
        });
        hasError = true;
      }

      if (end > today) {
        setError("endDate", {
          type: "manual",
          message: "End date must be in the past",
        });
        hasError = true;
      }

      if (start > end) {
        setError("startDate", {
          type: "manual",
          message: "Start date can't be after end date",
        });
        hasError = true;
      }

      if (hasError) return;
    }

    // if (data.resume) {
      
      
    //   const formData = new FormData();
    //   const file = data.resume[0]; // File input returns an array
    //   console.log(file)
    //   if (file) {
    //     formData.append("resume", file);
    //   }
    //   formData.forEach((e)=>{
    //     console.log(e);
        
    //   })
    //   const res = await metaData.onSubmitFunc(formData);
    //   console.log(res)
    // }

    if (!metaData.id) {
      const response = await metaData.onSubmitFunc(data);
      console.log("response from file", response)
      if (response) {
        alert("succesfully Updated");
        onClose()
      } else {
        alert("Could Not update, please try again")
      }

    } else {

      const response = await metaData.onSubmitFunc(metaData.id, data);
      console.log("response from file", response)
      if (response) {
        alert("succesfully Updated");
        onClose()
      } else {
        alert("Could Not update, please try again")
      }

    }



  };

  // Handle adding/removing values in multi-select
  const handleAddChip = (fieldName, value) => {
    const currentValues = watch(fieldName) || [];
    if (!currentValues.includes(value)) {
      setValue(fieldName, [...currentValues, value]);
    }
  };

  const handleRemoveChip = (fieldName, value) => {
    const currentValues = watch(fieldName) || [];
    setValue(
      fieldName,
      currentValues.filter((item) => item !== value)
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "1rem",
        },
      }}
    >
      <DialogTitle className="text-xl font-semibold ">
        {metaData?.title || "Modal"}
      </DialogTitle>

      <DialogContent>
        <div className=" rounded-3xl p-6 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="flex rounded-xl flex-col gap-6 mt-2"
          >
            {Object.entries(fields).map(([key, value]) => {
              const fieldType = type?.[key] || "text";
              const fieldSuggestions = suggestions?.[key];

              // Render radio buttons
              if (fieldType === "radio" && Array.isArray(fieldSuggestions)) {
                return (
                  <FormControl key={key} component="fieldset">
                    <FormLabel component="legend" className="mb-1">
                      {label[key]}
                    </FormLabel>
                    <RadioGroup row defaultValue={value}>
                      {fieldSuggestions.map((option, idx) => {
                        const [keyName] = Object.keys(option); // e.g., "location"
                        const value = option[keyName];
                        return (
                          <FormControlLabel
                            key={idx}
                            value={value}
                            control={<Radio />}
                            label={keyName}
                            {...register(key)}
                          />
                        )

                      })}
                    </RadioGroup>
                  </FormControl>
                );
              }

              // Render select dropdown
              if (
                fieldSuggestions &&
                Array.isArray(fieldSuggestions) &&
                fieldType !== "multi"
              ) {
                return (
                  <TextField
                    key={key}
                    label={label[key]}
                    select
                    defaultValue={value}
                    {...register(key)}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                      },
                    }}
                  >
                    {fieldSuggestions.map((option, idx) => (
                      <MenuItem key={idx} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                );
              }

              // Render multi-select (for multi-select type)
              if (fieldType === "multi" && Array.isArray(fieldSuggestions)) {
                const selectedValues = watch(key);

                return (
                  <div key={key}>
                    <FormLabel component="legend" className="mb-1">
                      {label[key]}
                    </FormLabel>
                    <Box className="flex flex-wrap  rounded-2xl gap-2 mb-2">
                      {selectedValues?.map((value, idx) => (
                        <Chip
                          key={idx}
                          label={value}
                          onDelete={() => handleRemoveChip(key, value)}
                          className="cursor-pointer"
                        />
                      ))}
                    </Box>
                    <TextField
                      select
                      label={label[key]}
                      fullWidth
                      variant="outlined"
                      size="small"
                      onChange={(e) => handleAddChip(key, e.target.value)}
                      defaultValue=""
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {fieldSuggestions.map((option, idx) => (
                        <MenuItem key={idx} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                );
              }

              // Render normal input
              return (
                <>
                  <TextField
                    key={key}
                    label={label[key]}
                    type={fieldType}
                    defaultValue={value}
                    {...register(key)}
                    fullWidth
                    variant="outlined"
                    size="small"
                    slotProps={{
                      inputLabel: { shrink: true },
                      sx: {
                        borderRadius: "16px",
                      },
                    }}
                  />
                  {errors[key] && <p className="text-red-500 text-[0.7rem] font-bold">{errors[key].message}</p>}
                </>

              );
            })}

            <div className="flex justify-end gap-3 pt-2">
              <Button
                onClick={onClose}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "16px" }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ borderRadius: "16px" }}
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DynamicModal;
