import axios from "axios";

const baseURL="http://localhost:8080/student";
//using object
const StudentListService={//objet named StudentServiceList
    getAllStudents:()=>{//method getAllStudents
        return axios.get(baseURL+"/getAllStudents");
    },

    deleteStudent:(id)=>{
        return axios.delete(baseURL+"/deleteStudent/"+id);
    },

    updateStudent:(id,data)=>{
        //const data ={firstName,middleName,lastName,phoneNumber,emailId};
        return axios.put(baseURL+"/updateStudent/"+id,data);
    },

    getById:(id)=>{
        return axios.get(baseURL+"/getById/"+id);
    }
};



// //using Class
// class StudentListService {
//     static getAllStudents() {
//       return axios.get(baseURL + "/getAllStudents");
//     }
// }

// //using function
// export function getAllStudents() {
//     return axios.get(baseURL + "/getAllStudents");
//   }

//   //for using function remove StudentServiceList and make changes in StudentList.js
export default StudentListService;