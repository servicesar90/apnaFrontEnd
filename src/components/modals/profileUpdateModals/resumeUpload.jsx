import React, { useState } from "react";
import { uploadFile } from "../../../API/ApiFunctions";
import { Box, Button, Modal } from "@mui/material";

const UserForm = ({ open, label, onClose, metaData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(metaData.default);
  const [uploadStatus, setUploadStatus] = useState("");


  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
    console.log(selected);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image!");
    setUploadStatus("Uploading....")
    const response = await uploadFile(file, metaData.field, metaData.Api);
    if (response) {
      setUploadStatus("Successfully Uploaded");
      setTimeout(() => {
        window.location.reload();
      }, 1000)

    } else {
      setUploadStatus("Could not uploaded, please try again")
    }

  };




  return (
    <Modal open={open} onClose={onClose} fullwidth >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4, }}>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="max-w-400 flex flex-col justify-center">
          <h2 className="m-4 font-bold text-[1.5rem]">{label}</h2>
             {preview && !preview.toLowerCase().endsWith('.pdf') && (
            <img src={preview} alt="Preview" className="m-4 rounded-[50%] w-[10rem] h-[10rem] self-center" />
          )}
          <input type="file"  accept={label === "Upload Resume" ? ".pdf, .doc, .docx, .txt" : ".jpg,.jpeg,.png, .svg"} onChange={handleFileChange} className="m-4" />
          <Button variant="contained" type="submit" sx={{ margin: "1rem" }}>Submit</Button>
          <p className="m-4 font-bold text-red-500 text-[1rem]">{uploadStatus}</p>
        </form>
      </Box>
    </Modal>

  );
};

export default UserForm;