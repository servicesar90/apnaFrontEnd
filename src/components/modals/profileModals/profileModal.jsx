import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, LinearProgress, Typography, Box, Chip, RadioGroup, FormLabel, FormControlLabel, Radio, Checkbox, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Calendar, Plus, X, UploadCloud } from "lucide-react";


const suggestedRoles = [
    'Office Help / Peon',
    'Front Office / Receptionist',
    'Back Office',
    'Corporate Communication',
    'MIS Operations',
];

const suggestedTitles = [
    "Manager", "Assistant", "CEO", "COO", "Coordinator"
]

const salaryOptions = [
    '₹5,000 - ₹10,000',
    '₹10,000 - ₹15,000',
    '₹15,000 - ₹20,000',
    '₹20,000 - ₹25,000',
    '₹25,000 - ₹30,000',
    '₹30,000 - ₹35,000',
    '> ₹35,000',
];

const languages = ["Hindi", "Tamil", "Telugu", "Marathi", "Bangla"]

const englishOptions = [
    {
        value: 'no_english',
        label: 'No English',
        description: '',
    },
    {
        value: 'basic',
        label: 'Basic',
        description: 'You can understand/speak basic sentences',
    },
    {
        value: 'intermediate',
        label: 'Intermediate',
        description: 'You can have a conversation in English on some topics',
    },
    {
        value: 'advanced',
        label: 'Advanced',
        description: 'You can do your entire job in English and speak fluently',
    },
];

const shiftOptions = ['Night Shift', 'Day Shift'];
const workplaceOptions = ['Work from Home', 'Work from Office', 'Field Job'];
const employementType = ["Full Time", "Part Time"];



export default function ProfileModal() {

    const [steps, setSteps] = useState(0);
    const [experienceYears, setExperienceYears] = useState(0);
    const [experienceMonths, setExperienceMonths] = useState(0);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedShift, setSelectedShifts] = useState([]);
    const [selectedWorkPlaces, setSelectedWorkPlaces] = useState([]);
    const [selectedEmployementType, setSelectedEmployementType] = useState([]);

    const yearsOptions = Array.from({ length: 31 }, (_, i) => i);
    const monthsOptions = Array.from({ length: 12 }, (_, i) => i);

    const {
        register,
        control,
        watch,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: null,
            dob: null,
            gender: null,
            email: null,
            whatsappUpdates: false,
            years: null,
            months: null,
            experiences: (experienceYears !== 0 || experienceMonths !== 0)
                ? [{ jobRole: null, jobTitle: null, currentSalary: null, companyName: null }]
                : [],
            englishProficiency: null,
            otherLanguages: [],
            preferredShifts: [],
            preferredWorkplace: [],
            preferredEmployementType: [],
            resume: null
        }
    });




    const handleSelectedJobRoles = (value) => {
        setValue('experiences[0].jobRole', value);
    };

    const handleSelectedJobTitles = (value) => {
        setValue('experiences[0].jobTitle', value);
    };



    const handleAdd = (fieldName, value, selectedArray, setSelectedArray) => {
        if (!selectedArray.includes(value)) {
            const updated = [...selectedArray, value];
            setSelectedArray(updated);
            setValue(fieldName, updated); // updates useForm field
        }
    };
    const handleDelete = (fieldName, value, selectedArray, setSelectedArray) => {
        const updated = selectedArray.filter((role) => role !== value);
        setSelectedArray(updated);
        setValue(fieldName, updated);
    };


    // const currentSalary = watch('currentSalary');

    // const handleSelectSalary = (value) => {
    //     setValue('currentSalary', value);
    // };

    // const handleClearSalary = () => {
    //     setValue('currentSalary', '');
    // };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === "application/pdf" || file.name.endsWith(".docx"))) {
            setValue("resume", file); // Set in react-hook-form state
        } else {
            alert("Only PDF or DOCX files are allowed");
        }
    };



    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex w-full min-h-screen bg-gray-100">

            {/* Right Section */}
            {steps === 0 &&
                <div className="w-full p-8 bg-white overflow-y-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Basic Details</h2>

                        {/* Name */}
                        <TextField
                            fullWidth
                            size="small"
                            label="fullName"
                            variant="outlined"
                            {...register("fullName", { required: true })}
                            error={!!errors.name}
                            helperText={errors.name ? "Name is required" : ""}

                        />

                        {/* DOB */}
                        <div className="relative">
                            <TextField
                                fullWidth
                                size="small"
                                label="Date Of Birth"
                                type="date"
                                {...register("dob", { required: true })}
                                error={!!errors.dob}
                                helperText={errors.dob ? "DOB is required" : ""}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}

                            />

                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
                            <RadioGroup row {...register("gender", { required: true })}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                            {errors.gender && <span className="text-red-500 text-sm">Gender is required</span>}
                        </div>

                        {/* Email */}
                        <TextField
                            fullWidth
                            size="small"
                            label="Email Address (Optional)"
                            variant="outlined"
                            type="email"
                            {...register("email")}
                        />

                        {/* WhatsApp Updates */}
                        <div className="flex items-center">
                            <Checkbox {...register("whatsappUpdates")} />
                            <label className="text-sm text-gray-700">
                                Send me important job updates on Whatsapp
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            onClick={handleSubmit(() => setSteps((prev) => prev + 1))}
                            fullWidth
                            className="!bg-green-600 hover:!bg-green-700 text-white font-bold"
                        >
                            Next
                        </Button>
                    </form>
                </div>
            }

            {steps === 1 &&
                <div className="w-2/3 p-8 bg-white overflow-y-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Experience Details</h2>

                        {/* Total Years of Experience */}
                        <label className="block font-medium text-sm text-gray-700">Total Years of Experience</label>
                        <div className="flex gap-4">
                            <FormControl fullWidth>
                                <InputLabel>Years</InputLabel>
                                <Controller
                                    name="years"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            label="Years"
                                            size="small"
                                            {...field}
                                            value={field.value || ""}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                field.onChange(value);        // update react-hook-form state
                                                setExperienceYears(value);    // update your local state
                                            }}
                                        >
                                            {yearsOptions.map((year) => (
                                                <MenuItem key={year} value={year}>
                                                    {year}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>


                            <FormControl fullWidth>
                                <InputLabel>Months (Optional)</InputLabel>
                                <Controller
                                    name="months"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            value={field.value || ""}
                                            label="Months (Optional)"
                                            size="small"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                field.onChange(value);        // update react-hook-form state
                                                setExperienceMonths(value);    // update your local state
                                            }}>
                                            {monthsOptions.map((month) => (
                                                <MenuItem key={month} value={month}>
                                                    {month}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </div>

                        {(experienceYears !== 0 || experienceMonths !== 0) &&
                            <>
                                <Controller
                                    name="experiences[0].jobRole"
                                    control={control}
                                    rules={{ required: "Job Role is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            value={field.value ?? ""}
                                            size="small"
                                            placeholder="Search your job role"
                                            variant="outlined"
                                            fullWidth
                                            error={!!errors.experiences?.[0]?.jobRole}
                                            helperText={errors.experiences?.[0]?.jobRole ? errors.experiences?.[0]?.jobRole.message : ""}  // Display error message
                                        />
                                    )}
                                />


                                {/* Suggested Roles */}
                                <div>
                                    <Typography className="text-sm font-medium mb-2">
                                        Suggested job roles
                                    </Typography>
                                    <Box className="flex flex-wrap gap-2">
                                        {suggestedRoles.map((role) => (
                                            <Chip
                                                key={role}
                                                label={
                                                    <span className="flex items-center gap-1">
                                                        {role} <Plus size={14} />
                                                    </span>
                                                }
                                                onClick={() => handleSelectedJobRoles(role)}
                                                variant="outlined"
                                            />
                                        ))}
                                    </Box>
                                    <Typography className="text-sm text-green-600 mt-2 cursor-pointer">
                                        Show all roles &gt;
                                    </Typography>
                                </div>

                                {/* Job Title */}

                                <Controller
                                    name="experiences[0].jobTitle"
                                    control={control}
                                    rules={{
                                        required: "Job title is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <TextField
                                                {...field}
                                                value={field.value ?? ""}
                                                placeholder="Search your job title"
                                                size="small"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.experiences?.[0]?.jobTitle}
                                                helperText={errors.experiences?.[0]?.jobTitle ? errors.experiences?.[0]?.jobTitle.message : ""}  // Display error message

                                            />

                                        </>
                                    )}
                                />


                                <div>
                                    <Typography className="text-sm font-medium mb-2">
                                        Suggested job Title
                                    </Typography>
                                    <Box className="flex flex-wrap gap-2">
                                        {suggestedTitles.map((title) => (
                                            <Chip
                                                key={title}
                                                label={
                                                    <span className="flex items-center gap-1">
                                                        {title} <Plus size={14} />
                                                    </span>
                                                }
                                                onClick={() => handleSelectedJobTitles(title)}
                                                variant="outlined"
                                            />
                                        ))}
                                    </Box>
                                    <Typography className="text-sm text-green-600 mt-2 cursor-pointer">
                                        Show all Titles &gt;
                                    </Typography>
                                </div>


                                {/* Company Name */}
                                <TextField
                                    label="Company Name"
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    {...register('experiences[0].companyName', { required: true })}
                                    error={!!errors.experiences?.[0]?.companyName}
                                    helperText={errors.experiences?.[0]?.companyName ? "Company Name is required" : ""}  // Display error message

                                />

                                {/* Current Salary */}
                                {/* <Controller
                                    name="currentSalary"
                                    control={control}
                                    render={({ field }) => ( */}
                                <TextField
                                    size="small"
                                    label="Current Salary"
                                    // Default to an empty string if null
                                    fullWidth
                                    type="number"
                                    {...register('experiences[0].currentSalary', {
                                        setValueAs: value => value === "" ? null : value  // Converts empty string to null
                                    })}
                                // onChange={(e) => {
                                //     const value = e.target.value;

                                //     if (e.nativeEvent.inputType === "insertText") {
                                //         if (/^\d*$/.test(value)) {
                                //             field.onChange(value);
                                //         }

                                //     } else {

                                //         field.onChange(value);
                                //     }
                                // }}
                                />

                                {/* )}
                                /> */}

                                {/* Salary Range Options */}
                                {/* <Box className="space-y-2">
                                    <Typography className="text-sm font-medium">
                                        Select salary range
                                    </Typography>
                                    <Box className="flex flex-wrap gap-2">
                                        {salaryOptions.map((range) => (
                                            <Chip
                                                key={range}
                                                label={range}
                                                variant={currentSalary === range ? 'filled' : 'outlined'}
                                                color={currentSalary === range ? 'success' : 'default'}
                                                onClick={() => handleSelectSalary(range)}
                                            />
                                        ))}
                                    </Box>
                                </Box> */}

                                {/* Info Note */}
                                <Box className="bg-blue-50 text-sm text-gray-700 p-3 rounded-md">
                                    <span className="text-blue-800 font-medium">Salary information is important,</span> we use it only to show relevant jobs.
                                </Box>
                            </>
                        }



                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            onClick={handleSubmit(() => setSteps((prev) => prev + 1))}
                            fullWidth
                            className="!bg-green-400 hover:!bg-green-500 text-white font-bold"
                        >
                            Next
                        </Button>
                    </form>
                </div>

            }

            {steps === 2 &&
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-xl space-y-6">
                    <Typography variant="h6" className="font-semibold">
                        Preferred Language
                    </Typography>

                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend" className="mb-2 font-medium text-base">
                            English
                        </FormLabel>
                        <Controller
                            name="englishProficiency"
                            control={control}
                            rules={{ required: "Proficiency is required" }}
                            render={({ field, fieldState }) => (
                                <>
                                    <RadioGroup {...field}>
                                        {englishOptions.map((option) => (
                                            <FormControlLabel
                                                key={option.value}
                                                value={option.value}
                                                control={<Radio />}
                                                label={
                                                    <Box>
                                                        <Typography variant="body1" fontWeight={500}>
                                                            {option.label}
                                                        </Typography>
                                                        {option.description && (
                                                            <Typography variant="body2" color="text.secondary">
                                                                {option.description}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                }
                                                className="py-2"
                                            />
                                        ))}
                                    </RadioGroup>
                                    {/* Display the error message */}
                                    {fieldState?.error && (
                                        <Typography color="error" variant="body2">
                                            {fieldState?.error?.message}
                                        </Typography>
                                    )}
                                </>
                            )}
                        />

                    </FormControl>

                    {/* Other Language */}


                    {/* other language Options */}
                    <Box className="space-y-2">
                        <Typography className="text-sm font-medium">
                            Select Languages
                        </Typography>
                        <Box className="flex flex-wrap gap-2">
                            {languages.map((language) => {
                                const isSelected = selectedLanguages.includes(language);
                                return (
                                    <Chip
                                        key={language}
                                        label={language}
                                        variant={isSelected ? 'filled' : 'outlined'}
                                        color={isSelected ? 'success' : 'default'}
                                        onClick={() => {
                                            if (isSelected) {
                                                handleDelete("otherLanguages", language, selectedLanguages, setSelectedLanguages);
                                            } else {
                                                handleAdd("otherLanguages", language, selectedLanguages, setSelectedLanguages);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </Box>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={handleSubmit(() => setSteps((prev) => prev + 1))}
                        className="bg-green-600 hover:bg-green-700 w-full"
                    >
                        Next
                    </Button>
                </form>
            }


            {steps === 3 && (
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-xl space-y-6">
                    <Typography variant="h6" className="font-semibold">
                        Preferred Shifts
                    </Typography>

                    <Box className="flex flex-wrap gap-2">
                        {shiftOptions.map((shift) => {
                            const isSelected = selectedShift.includes(shift);
                            return (
                                <Chip
                                    key={shift}
                                    label={shift}
                                    variant={isSelected ? 'filled' : 'outlined'}
                                    color={isSelected ? 'success' : 'default'}
                                    onClick={() =>
                                        isSelected
                                            ? handleDelete("preferredShifts", shift, selectedShift, setSelectedShifts)
                                            : handleAdd("preferredShifts", shift, selectedShift, setSelectedShifts)
                                    }
                                />
                            );
                        })}
                    </Box>

                    <Typography variant="h6" className="font-semibold">
                        Preferred Workplaces
                    </Typography>

                    <Box className="flex flex-wrap gap-2">
                        {workplaceOptions.map((place) => {
                            const isSelected = selectedWorkPlaces.includes(place);
                            return (
                                <Chip
                                    key={place}
                                    label={place}
                                    variant={isSelected ? 'filled' : 'outlined'}
                                    color={isSelected ? 'success' : 'default'}
                                    onClick={() =>
                                        isSelected
                                            ? handleDelete("preferredWorkplace", place, selectedWorkPlaces, setSelectedWorkPlaces)
                                            : handleAdd("preferredWorkplace", place, selectedWorkPlaces, setSelectedWorkPlaces)
                                    }
                                />
                            );
                        })}
                    </Box>

                    <Typography variant="h6" className="font-semibold">
                        Preferred Employement Type
                    </Typography>

                    <Box className="flex flex-wrap gap-2">
                        {employementType.map((type) => {
                            const isSelected = selectedEmployementType.includes(type);
                            return (
                                <Chip
                                    key={type}
                                    label={type}
                                    variant={isSelected ? 'filled' : 'outlined'}
                                    color={isSelected ? 'success' : 'default'}
                                    onClick={() =>
                                        isSelected
                                            ? handleDelete("preferredEmployementType", type, selectedEmployementType, setSelectedEmployementType)
                                            : handleAdd("preferredEmployementType", type, selectedEmployementType, setSelectedEmployementType)
                                    }
                                />
                            );
                        })}
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => setSteps((prev) => prev + 1)}
                        className="bg-green-600 hover:bg-green-700 w-full"
                    >
                        Next
                    </Button>
                </form>
            )}

            {steps === 4 &&
                <Box className="w-full max-w-xl p-6 bg-[#fdf6ff] rounded-lg shadow-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-xl space-y-6">
                        {/* Heading */}
                        <Typography variant="h6" className="font-semibold mb-2">
                            Resume
                        </Typography>

                        {/* Progress Bar */}
                        <Box className="mb-6">
                            <LinearProgress variant="determinate" value={75} />
                        </Box>

                        {/* Main Content */}
                        <Typography variant="h5" className="font-bold mb-1 text-center">
                            Upload your resume!
                        </Typography>
                        <Typography className="text-center mb-3 text-gray-700">
                            Receive <strong>2x job offers</strong> after uploading
                        </Typography>

                        <Box className="flex justify-center mb-4">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                                ⚡ Takes less than a min to upload
                            </span>
                        </Box>

                        {/* Upload Area */}
                        <Box className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-blue-300 rounded-xl bg-white">
                            <UploadCloud className="w-10 h-10 text-blue-500 mb-2" />
                            <Typography className="text-sm text-gray-600 text-center">
                                Upload <strong>.pdf</strong> or <strong>.docx</strong> file only
                                <br />
                                (Max file size: <strong>5 MB</strong>)
                            </Typography>
                            <Button
                                variant="contained"
                                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white"
                                component="label"
                            >
                                Upload Resume
                                <input type="file" hidden accept=".pdf,.docx" onChange={handleFileChange} />
                            </Button>
                        </Box>

                        {/* Footer Info */}
                        <Box className="mt-6 space-y-2 text-sm text-gray-700">
                            <div className="flex items-start gap-2">
                                <span className="text-green-600">✔</span>
                                <span>Unlock jobs from top companies faster</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-600">✔</span>
                                <span>Get direct calls from top HRs</span>
                            </div>
                        </Box>

                        <Button
                            variant="contained"
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 w-full"
                        >
                            Submit
                        </Button>

                    </form>
                </Box>
            }


        </div>
    );
}
