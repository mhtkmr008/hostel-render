import axios from "axios";


const baseURL="http://localhost:8080/student";

const RegistrationService={
    addStudent:(firstName,middleName,lastName,phoneNumber,emailId)=>{
        const student={firstName:firstName,middleName:middleName,lastName:lastName,phoneNumber:phoneNumber,emailId:emailId};
        return axios.post(baseURL+"/add",student);
    },
}

export default RegistrationService;