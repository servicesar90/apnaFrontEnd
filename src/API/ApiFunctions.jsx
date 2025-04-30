import axios from "axios";
import { createEmpProfile, mobileApi, otpApi } from "./APIs";


// data={ phone: "string", role: "string" }
export const handlelogin = async (data) =>{
    const response = await axios.post(mobileApi,data);
    return response;
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