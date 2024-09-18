import axios from "axios";

const apiRequest = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:'AIzaSyC-u1FKLapm1FdU_r2Y3hJ-fFj1Oqq-GD4'
    }
})

export default apiRequest