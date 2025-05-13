import axios from "axios";
import { applyJobApi, createEducationApi, createEmpProfile, employeeExpApi, getJobsApi, mobileApi, otpApi, uploadProfileApi, uploadResumeApi } from "./APIs";


// data={ phone: "string", role: "string" }
export const handlelogin = async (data) =>{
    try{
        const response = await axios.post(mobileApi,data);
        return response;
    }catch(e){
        console.log("error in logging in",e)
    }
    
    
}

// data={phone:"string",role:"string",otp:"string"}
export const handleOtp = async (data)=>{
    try{
        const response= await axios.post(otpApi, data);
    
        localStorage.setItem("TokenId", response.data.token )
        localStorage.setItem("User", JSON.stringify(response.data.user ))
      
    return response;
    }catch(err){
        console.log("error response",err);
        alert("Login Unsucessfull")
        
    }
}

export const createProfile = async (data)=>{
    try {
        const token = localStorage.getItem('TokenId')
        console.log(`token ${token} data ${data}`);
        const headers = {
            Authorization: `Bearer ${token}`
          };
          
          const response = await axios.post(createEmpProfile, data, {
            headers
          });

          console.log(`response` , response);
          return response
          
        
    } catch (error) {
        console.log("Error from create Profile api",error);
        
        
    }
}

export const getprofile = async ()=>{
    try{
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
          };
        const response= await axios.get(createEmpProfile, {headers});
      
        return response;
        
    }catch(err){
        console.log("Error from get Profile api",err)
    }
}

export const getJobs = async ()=>{
    try{
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
          };
        const response= await axios.get(getJobsApi, {headers});
      
        return response;
        
    }catch(err){
        console.log("Error from get jobs api",err)
    }
}

export const createEducation = async (data)=>{
    try{
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
          };

          console.log("data", data)

          const response= await axios.post(createEducationApi, data, {headers});

          console.log(response)
    }catch(e){
        console.log("error from create education", e)
    }
}

export const editEducation = async (id, data)=>{
    try{
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
          };

          console.log("data", data, "id", id)

          const response= await axios.patch(`${createEducationApi}/${id}`, data, {headers});

          console.log(response)
          return response;
    }catch(e){
        console.log("error from edit education", e)
    }
}

export const uploadFile = async (file, field, Api) =>{
     const data = new FormData();
  
     data.append(field, file);
    for (let [key, value] of data.entries()) {
        console.log(`${key}:`, value);
      }
    
    try {

      const token= localStorage.getItem("TokenId");
      const headers={
        Authorization:`Bearer ${token}`
      }
  
      
      const res = await axios.post(Api, data, {headers});

      return res;
      
    } catch (err) {
      console.error(err);
    }
}

export const updateSkils = async (data)=>{
    try{
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
          };

          

          console.log("data", data)

          const response= await axios.patch(createEmpProfile, data, {headers});

          console.log(response)
          return response;
    }catch(e){
        console.log("error from edit skills", e)
    }
}

export const employeeExp = async (data)=>{
    try{
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
          };
        
        const response= await axios.post(employeeExpApi,data,{headers});
      
        return response;
        
    }catch(err){
        console.log("Error from get jobs api",err)
    }
}

export const applyJobs = async (id)=>{
    try{
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
          };
        
        const response= await axios.post(`${applyJobApi}/${id}`,{},{headers});
      
        return response;
        
    }catch(err){
        console.log("Error from get jobs api",err)
    }
}