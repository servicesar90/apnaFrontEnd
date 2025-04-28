import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { CalendarIcon, Lock } from "lucide-react";
import { Input } from "@mui/material";

const EditBasicDetailsModal = ({ open, onClose, fullName, gender, dob, email }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      fullName,
      gender,
      dob,
      email,
    },
  });

  const user= JSON.parse(localStorage.getItem("User"));


  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle className="text-xl font-semibold">Edit basic details</DialogTitle>
      <DialogContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div className="space-y-2">
            <Typography variant="body2" className="text-sm">Name</Typography>
            <Input
              {...register("fullName", { required: "Name is required" })} 
            
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
          </div>

          {/* Gender Select */}
          <div className="space-y-2">
            <Typography variant="body2" className="text-sm">Gender</Typography>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-xs">{errors.gender.message}</p>}
          </div>

          {/* Date of Birth Input */}
          <div className="space-y-2">
            <Typography variant="body2" className="text-sm">Date of birth</Typography>
            <div className="relative">
              <Input
                type="date"
                {...register("dob", { required: "Date of birth is required" })}
                className="w-full pr-10"
              />
              <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            {errors.dob && <p className="text-red-500 text-xs">{errors.dob.message}</p>}
          </div>

          {/* Mobile Number (Disabled) */}
          <div className="space-y-2">
            <Typography variant="body2" className="text-sm">Mobile number</Typography>
            <div className="relative">
              <Input
                value={user?.phone}
                disabled
                className="w-full pr-10 bg-gray-100"
              />
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Typography variant="body2" className="text-sm">Email ID</Typography>
            <div className="flex gap-2">
              <Input
                {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" } })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <Button variant="outlined" className="text-green-600 border-green-600">
                Verify
              </Button>
            </div>
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          {/* Save Button */}
          <Button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white rounded-md"
          >
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBasicDetailsModal;
