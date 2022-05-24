import axios from 'axios';


 export default axios.create({
     baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID dvS3aVP4DsPkNtgOXgcAWEYdDRzm66Hk2Fd6kw7ovXw'},
 })