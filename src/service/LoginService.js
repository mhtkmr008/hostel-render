import axios from "axios";

const baseURL="https://hostel-springboot-render.onrender.com/user";

const LoginService={
    getAuthorization:(username,password)=>{
        const data={username:username,password:password};
        return axios.post(baseURL+"/login",data);
    },
}

export default LoginService;