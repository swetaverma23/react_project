import axios from 'axios'

const USER_REST_API_URL = 'http://localhost:8010/userslist'
class UserServices{
    getUsers(){
        return axios.get(USER_REST_API_URL);
    }
}
export default new UserServices();