import axios from "axios";

const fetchUser = async({queryKey}) => {
    console.log("query key is ",queryKey);
    const userId = queryKey[1];
    const response = await axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
        headers: {
          'app-id': import.meta.env.VITE_APP_ID
        }
      });
      return response;
}

export default fetchUser;