import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", file:{}});
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

    const data = new FormData();
    if (formData.name) data.append("name", formData?.name || null);
    if (formData.email) data.append("email", formData?.email || null);
    if (file) data.append("resume", file);
    for (let [key, value] of data.entries()) {
        console.log(`${key}:`, value);
      }
    
    try {
      setUploadStatus("Uploading...");

      const headers={
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDAxLCJwaG9uZSI6IjkzNjk0ODcyNTAiLCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE3NDY4NTcyNjEsImV4cCI6MTc0NzQ2MjA2MX0.AoQK50Wz1pZs3iPXO5G1LDWalXDn-oHDVlUGd_JzVEI"
      }
  
      
      const res = await axios.post("https://production.careernest.online/api/v1/employee-uploads/resume", data, {headers});
      
      console.log(res);
      
      setUploadStatus("Success!");
      
    } catch (err) {
      setUploadStatus("Upload failed!");
      console.error(err);
    }
  };
  
  
  

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Create User</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="file" accept="" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" width="100" />}
      <button type="submit">Submit</button>
      <p>{uploadStatus}</p>
    </form>
  );
};

export default UserForm;