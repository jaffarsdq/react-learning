import { useEffect, useState } from 'react';
import axios from 'axios';


export default function useUserList () { 
    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios.get("https://dummyapi.io/data/v1/user", {
          headers: {'app-id': import.meta.env.VITE_APP_ID}
      })
      .then(response => {
          const responseObject = response.data;
          setUsers([...responseObject.data]);
      })
    }, []);
  return [users];
}