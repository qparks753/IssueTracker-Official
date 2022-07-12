import axios from "axios"

const getPublicContent =() =>{
    return axios.get(`${process.env.REACT_APP_API}/api/test/all`)
}

const getUserBoard = () =>{
    return axios.get(`${process.env.REACT_APP_API}/api/test/user`)
}

const getModeratorBoard = () => {
    return axios.get(`${process.env.REACT_APP_API}/api/test/mod`);
};

const getAdminBoard = () => {
    return axios.get(`${process.env.REACT_APP_API}/api/test/admin`);
};

const DataService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}
  
export default DataService;