import axios from "axios";

const baseURL="http://localhost:8080/user";

const LoginService={
    getAuthorization:(username,password)=>{
        const data={username:username,password:password};
        return axios.post(baseURL+"/login",data);
    },
}

export default LoginService;