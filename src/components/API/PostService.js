import axios from "axios";

export default class PostService {
    static async getAll() {
        const usersURL = 'https://jsonplaceholder.typicode.com/users'
        const response = await axios.get(usersURL);
        return response;
    }
}